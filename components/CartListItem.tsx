import { useCart } from "@/provider/CartProvider"
import { CartItem } from "@/types"
import { FontAwesome } from "@expo/vector-icons"
import { Image, Text, View } from "react-native"

type CartListItemProps = {
    cartItem: CartItem
}

const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png' 

const CartListItem = ({cartItem}: CartListItemProps) =>{
    const { updateQuantity } = useCart();
    return(
        <View className="rounded-xl p-3 flex-1 flex-row items-center" style={{backgroundColor: 'white'}} >
            <Image 
                source={{uri: cartItem.product.image || defaultPizzaImage}}
                className=' aspect-square self-center'
                style={{ width: 40, margin: 10 }}
                resizeMode="contain"
            />
            <View className="flex-1" >
                <Text>{cartItem.product.name}</Text>
                <View className="flex-row">
                    <Text className="text-blue-600 font-bold">${cartItem.product.price.toFixed(2)}</Text>
                    <Text style={{marginHorizontal: 10}}>Size: {cartItem.size}</Text>
                </View>
            </View>
            <View className="flex-row gap-10 items-center my-5">
                <FontAwesome
                    onPress={()=> updateQuantity(cartItem.id, -1)} 
                    name="minus"
                    color='gray'
                    className="p-5"
                />
                <Text className="font-semibold text-md ">{cartItem.quantity}</Text>
                <FontAwesome
                    onPress={()=> updateQuantity(cartItem.id, 1)} 
                    name="plus"
                    color='gray'
                    className="p-5"
                />
            </View>
        </View>
    )
}

export default CartListItem;