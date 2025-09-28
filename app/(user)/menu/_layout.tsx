import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link, Stack } from 'expo-router';
import { Pressable } from 'react-native';

export default function MenuLayout() {
  return (
  <Stack 
  screenOptions={{ 
    headerRight: () =>(
      <Link href='/cart' asChild>
          <Pressable>
            {({ pressed })=> (
              <MaterialCommunityIcons name="cart" color="#000" size={24} />
            )
            }
          </Pressable>
      </Link>
    )
   }}>
    <Stack.Screen 
      name='index'
      options={{
        title: 'Menu'
      }}
    />
  </Stack>
)};