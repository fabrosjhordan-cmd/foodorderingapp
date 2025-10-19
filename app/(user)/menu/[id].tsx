import products from '@/assets/data/products';
import Button from '@/components/Button';
import { useCart } from '@/provider/CartProvider';
import { PizzaSize } from '@/types';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';

  const sizes: PizzaSize[]=['S','M', 'L', 'XL']
  const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'

export default function PizzaDetailScreen() {
  const { addItem } =useCart();
  const { id } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState<PizzaSize>('M');
  const product = products.find((p)=> p.id.toString() === id);

  const router = useRouter();

  const addToCart = () =>{
   if(!product){
    return
   }
     addItem(product, selectedSize)
     router.push('/cart');
  }
   if (!product){ 
    return <Text>Product not found</Text>
  }

  return (
    <View className='flex-1 p-4' style={{backgroundColor: '#fff'}}>
        <Stack.Screen options={{title: product.name}}/>
        <Image 
          source={{uri: product.image || defaultPizzaImage}}
          className='w-[100%] aspect-square self-center'
          resizeMode='contain'
        />
        <Text className='my-4 font-semibold'>Select Size</Text>
        <View className='flex-row justify-around'>
            {sizes.map((size)=>(
              <Pressable
                onPress={()=> setSelectedSize(size)}
                key={size}
                className='w-20 aspect-square rounded-full items-center justify-center'
                style={{backgroundColor: size === selectedSize ? 'gainsboro' : 'white'}}
              >
              <Text className='text-xl font-semibold' style={{color: size === selectedSize ? 'black' : 'gray'}}>{size}</Text>
              </Pressable>
            ))}
        </View>
        <Text className='text-md font-bold mt-auto'>Price: ${product.price.toFixed(2)}</Text>
        <Button onPress={addToCart} text='Add to cart' />
    </View>
  )
}
