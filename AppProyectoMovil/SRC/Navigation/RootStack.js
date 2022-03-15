import * as React from 'react';

import { NavigationContainer, NavigationContainerRefContext } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../Componentes/login';
import Usuarios from '../Componentes/usuarios';
import Comercio from '../Componentes/AgregarComercio';

const Stack = createNativeStackNavigator();

const RootStack = () => {
 return(
     <NavigationContainer>
         <Stack.Navigator
         screenOptions={{
             headerStyle: {
                 backgroundColor: 'transparent'
             },
             headerTintColor: '#1F2937',
             headerTransparent: true,
             headerTitle: '',
             headerLeftContainerStyle: {
                 paddingLeft: 20
             }
         }}
         initialRouteName='Login'>
             <Stack.Screen name='Login' component={Comercio}/>
             <Stack.Screen name='Usuarios' component={Usuarios}/>
         </Stack.Navigator>
     </NavigationContainer>
 );   
};

export default RootStack;