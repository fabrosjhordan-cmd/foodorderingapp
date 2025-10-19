import orders from "@/assets/data/orders";
import OrderItemListitem from "@/components/OrderItemListItem";
import OrderListItem from "@/components/OrderListItem";
import { Stack, useLocalSearchParams } from "expo-router";
import { FlatList, Text, View } from "react-native";

const OrderDetailScreen = () =>{
  const { id } = useLocalSearchParams();

  const order = orders.find((o)=> o.id.toString() === id)

  if(!order){
    return <Text>Order not found</Text>
  }

  return(
    <View className="flex-1 p-5 gap-10">
      <Stack.Screen options={{title: `Order #${order.id}`}} />
      
      <OrderListItem order={order} />

      <FlatList
        data={order.order_items}
        renderItem={({item}) => <OrderItemListitem item={item} />}
        contentContainerStyle={{ gap: 10}}
      />
    </View>
  )
}

export default OrderDetailScreen