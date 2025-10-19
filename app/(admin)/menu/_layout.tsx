import { Feather } from '@expo/vector-icons';
import { Link, Stack } from 'expo-router';
import { Pressable } from 'react-native';

export default function MenuLayout() {
  
  return (
  <Stack 
  screenOptions={{ 
    
   }}>
    <Stack.Screen 
      name='index'
      options={{
        headerRight: () =>(
      <Link href='/(admin)/menu/create' asChild>
          <Pressable>
            {({ pressed })=> (
              <Feather name="plus-square" color="#FAA18F" size={24} />
            )
            }
          </Pressable>
      </Link>
    ),
        title: 'Menu'
      }}
    />
    
    <Stack.Screen 
      name='create'
      options={{
        title: 'Add Pizza Flavor'
      }}
    />
  </Stack>
)};