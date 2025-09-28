import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';

import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { useColorScheme } from '@/components/useColorScheme';
import { Feather, Fontisto, MaterialIcons } from '@expo/vector-icons';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      
      <Tabs.Screen name='index' options={{href: null}} />

      <Tabs.Screen
        name="menu"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Feather name="home" color={color} size={18} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: 'Orders',
          tabBarIcon: ({ color }) => <Fontisto name="list-1" color={color} size={18} />,
          headerShown: false
        }}
      />
      <Tabs.Screen
              name="logout"
              options={{
                title: 'Logout',
                headerShown: false,
                tabBarIcon: ({ color }) => <MaterialIcons name="logout" color={color} size={18} />,
              }}
            />
    </Tabs>
  );
}
