import CartListItem from '@/components/CartListItem';
import { useCart } from '@/provider/CartProvider';
import React from 'react';
import { FlatList, View } from 'react-native';

const CartScreen = () => {
    const { items } = useCart();
  return (
    <View>
      <FlatList 
        data={items}
        renderItem={({item})=> <CartListItem cartItem={item}/> }
        contentContainerStyle={{padding: 10, gap: 10}}
      />
    </View>
  )
}

export default CartScreen