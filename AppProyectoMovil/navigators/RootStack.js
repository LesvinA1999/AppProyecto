import * as React from 'react';

import { NavigationContainer, NavigationContainerRefContext } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../SRC/Componentes/login';
import Clientes from '../SRC/Componentes/AgregarClientes';
import Comercio from '../SRC/Componentes/AgregarComercio';
import Pedidos from '../SRC/Componentes/AgregarPedidos';
import Empleados from '../SRC/Componentes/empleados';
import Usuarios from '../SRC/Componentes/usuarios';
import AgregarCliente from '../SRC/Componentes/empleados';

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
             <Stack.Screen name='AgregarClientes' component={AgregarCliente}/>
             <Stack.Screen name='Usuarios' component={Usuarios}/>
         </Stack.Navigator>
     </NavigationContainer>
 );   
};

export default RootStack;