import orders from "@/assets/data/orders";
import OrderItemListitem from "@/components/OrderItemListItem";
import OrderListItem from "@/components/OrderListItem";
import { OrderStatusList } from "@/types";
import { Stack, useLocalSearchParams } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";

const OrderDetailScreen = () =>{
  const { id } = useLocalSearchParams();

  const order = orders.find((o)=> o.id.toString() === id)

  if(!order){
    return <Text>Order not found</Text>
  }

  return(
    <View className="flex p-5 gap-10">
      <Stack.Screen options={{title: `Order #${order.id}`}} />
      
      <OrderListItem order={order} />

      <FlatList
        data={order.order_items}
        renderItem={({item}) => <OrderItemListitem item={item} />}
        contentContainerStyle={{ gap: 10}}
      />
      <Text className="font-bold">Status</Text>
      <View className="flex-row gap-3">
        {OrderStatusList.map((status)=>(
          <Pressable 
            key={status}
            onPress={()=>console.log('Update Status')}
            className={`border border-blue-700 p-3 rounded-lg ${order.status === status ? 'bg-blue-700' : 'bg-transparent'}`}
          >
          <Text className={`${order.status === status ? 'color-white' : 'color-blue-700'}`}>{status}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  )
}

export default OrderDetailScreen