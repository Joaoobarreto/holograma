import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from './pages/Home'
import Search from './pages/Search'
import Cart from './pages/Cart'
import Profile from './pages/Profile'

import {AntDesign, Ionicons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

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
            }}/>

            <Tab.Screen 
            name="Cart" 
            component={Cart}
            options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <AntDesign name="shoppingcart" size={size} color={color} />
                ),
                tabBarLabel: () => false
            }}/>
            
            <Tab.Screen 
            name="Profile" 
            component={Profile}
            options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <Ionicons name="person-outline" size={size} color={color} />
                ),
                tabBarLabel: () => false
            }}/>

        </Tab.Navigator>
    )
}