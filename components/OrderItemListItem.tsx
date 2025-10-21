import { OrderItem } from "@/types"
import { Image, Text, View } from "react-native"

type OrderItemListItemProps = {
    item: OrderItem
}

const OrderItemListitem = ({item} : OrderItemListItemProps) =>{
    const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png' 

    return(
        <View className="bg-white rounded-md p-4 flex-1 flex-row items-center">
            <Image
                source={{uri: item.products.image || defaultPizzaImage}}
                className="w-[60px] aspect-square self-center mr-3"
                resizeMode="contain"
            />
            <View className="flex-1">
                <Text className="font-semibold text-lg mb-5">{item.products.name}</Text>
                <View className="flex-row" style={{gap: 5}}>
                    <Text className="text-blue-600 font-bold">{item.products.price.toFixed(2)}</Text>
                    <Text>Size: {item.size}</Text>
                </View>
            </View>
            <View className="flex-row items-center" style={{gap: 10, marginVertical: 10}}>
                <Text className="text-md font-semibold">{item.quantity}</Text>
            </View>
        </View>
    )
}

export default OrderItemListitem;