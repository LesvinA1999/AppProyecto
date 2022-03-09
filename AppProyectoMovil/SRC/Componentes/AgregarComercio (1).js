import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function AgregarComercio() {
  const [NombreComercio, setNombreComercio] = useState(null);
  const [IdTipoComercio, setIdTipoComercio] = useState(null); 

  const presGuardar = async () => {
    if(!NombreComercio || !IdTipoComercio){
      console.log("Escriba los datos requeridos");
      Alert.alert("MEDI", "Escriba los datos requeridos");
    }
    else{
      try{
        const respuesta = await fetch(
          'http://192.168.18.1:7000/api/comercio/guardar',
          {
            method: "POST", 
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              NombreComercio: NombreComercio,
              IdTipoComercio: IdTipoComercio,
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
            value={NombreComercio}
            onChangeText={setNombreComercio}
              placeholder="Escriba el NombreComercio"
              style={styles.entradas}
            >
            </TextInput>
            <TextInput
            value={IdTipoComercio}
            onChangeText={setIdTipoComercio}
              placeholder="Escriba el IdTipoComercio"
              style={styles.entradas}
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