import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../Componentes/HomeScreen';
import Login from '../Componentes/empleados';
import Profile from '../Componentes/AgregarClientes';
import Comercio from '../Componentes/AgregarComercio';

const Tab = createBottomTabNavigator();

export default function Navigation () {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size}) => {
                        let iconName;
                        if(route.name === 'Home') {
                            iconName = focused ? 'ios-home' : 'ios-home-outline';
                        } else if (route.name === 'Login') {
                            iconName = focused ? 'ios-search' : 'ios-search-outline';
                        } else if (route.name === 'Profile') {
                            iconName = focused ? 'ios-person' : 'ios-person-outline';
                        } else if (route.name === 'Comercio') {
                            iconName = focused ? 'ios-cart' : 'ios-cart-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={"#5004AD"}/>;
                    },
                    tabBarShowLabel: false
                })}
            >
                <Tab.Screen name='Home' component={HomeScreen}/>
                <Tab.Screen name='Login' component={Login}/>
                <Tab.Screen name='Profile' component={Profile}/>
                <Tab.Screen name='Comercio' component={Comercio}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}