import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import AgregarCliente from './SRC/Componentes/AgregarClientes';
export default function App() {
  return (
    <AgregarCliente></AgregarCliente>
  );
}

import AgregarPedido from './SRC/Componentes/AgregarPedidos';
export default function App() {
  return (
    <AgregarPedido></AgregarPedido>
  );
}
const styles = StyleSheet.create({
  
});
