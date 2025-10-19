import products from '@/assets/data/products';
import { useCart } from '@/provider/CartProvider';
import { PizzaSize } from '@/types';
import { Feather } from '@expo/vector-icons';
import { Link, Stack, useLocalSearchParams, useRouter } from 'expo-router';
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
        <Stack.Screen
          options={{
            headerRight: () =>(
        <Link href={`/(admin)/menu/create?id=${id}`} asChild>
              <Pressable>
                {({ pressed })=> (
                  <Feather name="edit" color="#FAA18F" size={24} />
                )
                }
              </Pressable>
          </Link>
        ),
            title: 'Menu'
          }}
        />

        <Stack.Screen options={{title: product.name}}/>
        <Image 
          source={{uri: product.image || defaultPizzaImage}}
          className='w-[100%] aspect-square self-center'
          resizeMode='contain'
        />
        <Text className='text-2xl font-bold mt-4'>{product.name}</Text>
        <Text className='text-md font-bold mt-4'>{product.price.toFixed(2)}</Text>
    </View>
  )
}
