import * as React from 'react';

import { NavigationContainer, NavigationContainerRefContext } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../Componentes/login';
import Navigation from '../Componentes/HomeScreen';

const Stack = createNativeStackNavigator();

const RootStack = () => {
 return(
     <NavigationContainer>
         <Stack.Navigator
         screenOptions={{
             headerStyle: {
                 
             },
             headerTintColor: '#1F2937',
             headerTransparent: true,
             headerTitle: '',
             headerLeftContainerStyle: {
                 paddingLeft: 20
             }
         }}
         initialRouteName='Login'>
             <Stack.Screen name='Login' component={Login}/>
             <Stack.Screen name='Navigation' component={Navigation}/>
         </Stack.Navigator>
     </NavigationContainer>
 );   
};

export default RootStack;