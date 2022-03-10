import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import Login from './SRC/Componentes/login';
import Clientes from './SRC/Componentes/AgregarClientes';
import Comercio from './SRC/Componentes/AgregarComercio';
import Pedidos from './SRC/Componentes/AgregarPedidos';
import Empleados from './SRC/Componentes/empleados';
import Usuarios from './SRC/Componentes/usuarios';
export default function App() {
  return (
    <Login></Login>
  );
}
