import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../pages/Home'
import Search from '../pages/Search'
import Cart from '../pages/Cart'
import Profile from '../pages/Profile'
import ProfilePage from '../pages/Profile/ProfilePage'
import InformacoesConta from '../pages/InformacoesConta'
import MeusPedidos from '../pages/MeusPedidos'

import { AntDesign, Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ProfileStackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='ProfilePage'
        component={ProfilePage}
      />
      <Stack.Screen
        name='InformacoesConta'
        component={InformacoesConta}
        options={{ headerShadowVisible: false, title: '' }}
      />
      <Stack.Screen
        name='MeusPedidos'
        component={MeusPedidos}
        options={{ headerShadowVisible: false, title: '' }}
      />
    </Stack.Navigator>
  )
}

export default function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          tabBarLabel: () => false
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="search1" size={size} color={color} />
          ),
          tabBarLabel: () => false
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="shoppingcart" size={size} color={color} />
          ),
          tabBarLabel: () => false
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileStackRoutes}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
          tabBarLabel: () => false
        }}
      />

    </Tab.Navigator>
  )
}
