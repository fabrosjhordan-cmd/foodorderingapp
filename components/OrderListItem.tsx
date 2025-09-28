import { Order } from "@/types";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
import { Link, useSegments } from "expo-router";
import { Pressable, Text, View } from "react-native";


dayjs.extend(relativeTime);

type OrderListItemProps ={
    order: Order
}

const OrderListItem = ({order}: OrderListItemProps) =>{
    const segment = useSegments();

    return(
        <Link href={`/${segment[0]}/orders/${order.id}`} asChild>
        <Pressable className="bg-white p-4 rounded-lg flex-row justify-between items-center">
            <View>
                <Text className="font-bold my-2">Order #{order.id}</Text>
                <Text className="text-gray-400">{dayjs(order.created_at).fromNow()}</Text>
            </View>
            <Text className="font-semibold">{order.status}</Text>
        </Pressable>
        </Link>
    )
}

export default OrderListItem;