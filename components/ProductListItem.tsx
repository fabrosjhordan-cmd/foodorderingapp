import { Product } from "@/types";
import { Link, useSegments } from "expo-router";
import { Image, Pressable, Text } from "react-native";

type ProductListItemProps  ={
    product: Product
}

const ProductListItem = ({product}: ProductListItemProps) => {
    const segments = useSegments();
    return (
    <Link href={`${segments[0]}/menu/${product.id}`} asChild>
      <Pressable className='flex-1 rounded-md p-8 my-2 overflow-hidden' style={{ backgroundColor: "#fff" }}>
          <Image 
            source={{uri: product.image || 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'}}
            className='w-[100%] aspect-square self-center'
            resizeMode='contain'
            />
          <Text className='font-semibold text-md my-3'>{product.name}</Text>
          <Text className='font-bold mt-auto text-blue-600'>${product.price.toFixed(2)}</Text>
      </Pressable>
    </Link>
    )
}

export default ProductListItem;