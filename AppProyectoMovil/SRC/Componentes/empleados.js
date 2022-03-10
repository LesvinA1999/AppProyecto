import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function AgregarCliente() {
  const [NombreCliente, setNombre] = useState(null);
  const [ApellidoCliente, setApellido] = useState(null); 
  const [TelefonoCliente, setTelefono] = useState(null); 
  const [Direccion, setDireccion] = useState(null); 

  const presGuardar = async () => {
    if(!NombreCliente || !ApellidoCliente || !Direccion){
      console.log("Escriba los datos requeridos");
      Alert.alert("MEDI", "Escriba los datos requeridos");
    }
    else{
      try{
        const respuesta = await fetch(
          'http://192.168.1.45:7000/api/clientes/guardar',
          {
            method: "POST", 
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              NombreCliente: NombreCliente,
              ApellidoCliente: ApellidoCliente,
              TelefonoCliente: TelefonoCliente,
              Direccion: Direccion,
            })
          });
        const json = await respuesta.json();
        console.log(json);
        Alert.alert("MEDI", "Peticion procesada");
      }catch(error){
        console.log(error);
      }
    }
  }

  return (
    <View style={styles.contenedor}>
      <View style={styles.contenedorClientes}>
        <View style={styles.contenedorTitulo}>
          <Text style={styles.titulo}>Agregar Clientes</Text>
        </View>
        <View style={[styles.contenedorControles, styles.sombraControles]}>
          <View style={styles.controles}>
            <TextInput
            value={NombreCliente}
            onChangeText={setNombre}
              placeholder="Escriba el Nombre"
              style={styles.entradas}
            >
            </TextInput>
            <TextInput
            value={ApellidoCliente}
            onChangeText={setApellido}
              placeholder="Escriba el Apellido"
              style={styles.entradas}
            >
            </TextInput>
            <TextInput 
            value={TelefonoCliente}
            onChangeText={setTelefono}
              placeholder="Escriba el telefono"
              style = {styles.entradas}
            >
            </TextInput>
            <TextInput
            value={Direccion}
            onChangeText={setDireccion}
              placeholder="Escriba la direccion"
              style = {styles.entradas}
            >
            </TextInput>
          </View>
          <View style={styles.contenedorBotones}>
            <View style={styles.boton}>
              <Button title="Guardar"
              onPress={presGuardar}
              ></Button>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#e9ecef',
    alignItems: 'center',
    justifyContent: "center",
    margin:0,
    padding: 20,
    width:"100%",
    height:"100%",
  },
  contenedorClientes: {
    alignItems: "stretch",
    justifyContent: 'center',
    height: 530,
    width: 360,
  },
  contenedorTitulo: {
    flex: 1,
    flexDirection:"column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  contenedorControles: {
    flex: 3,
    flexDirection:"column",
    alignItems: "stretch",
    justifyContent:"center",
    borderWidth: 1,
    borderColor: "#dedede",
    borderRadius:25,
    backgroundColor:"#fff",
    padding:10,
  },
  sombraControles: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  titulo: {
      color: "#495057" ,
      fontSize: 40,
      fontWeight: "500",
    },
  controles:{
    flex:4,
    marginBottom: 10,
    paddingTop:10,
    paddingLeft:10,
    paddingRight:10,
  },
  contenedorBotones:{
    flex:1,
    padding: 10,
    justifyContent:"space-evenly",
    flexDirection: "row",
  },
  boton:{
    flex:1,
    alignItems:"stretch",
    marginLeft:10,
    marginRight:10,
  },
  entradas:{
    flex:1,
    alignItems:"stretch",
    margin:10,
    padding:10,
    fontSize: 20,
    fontWeight:"400",
    color: "#495057",
    backgroundColor:"#fff",
    borderWidth:1,
    borderStyle:"solid",
    borderColor: "#ced4da",
    borderRadius: 15,
  }
});
