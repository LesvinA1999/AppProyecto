import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {Text, ScrollView, ImageBackground, Dimensions, View, TextInput, StyleSheet, Alert} from 'react-native';
import { ListItem, Avatar, CheckBox, Button } from 'react-native-elements'


export default function Empleados() {

  const [NombreEmpledao, setNombreEmpledao] = useState('');
  const [ApellidoEmpleado, setApellidoEmpleado] = useState('');
  const [TelefonoEmpleado, setTelefonoEmpleado] = useState(null);
  const [Idusuario, setIdusuario] = useState(28);

  const guardar = async () => {
    if(!NombreEmpledao || !ApellidoEmpleado){
      console.log("No puede dejar los campos vacios");
      Alert.alert("¡Mandaditos Ya!", "No puede dejar los campos vacios");
    }
    else{
      try{
        const respuesta = await fetch(
          'http://192.168.0.4:7000/api/empleados/guardar',
          {
            method: "POST", 
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              NombreEmpledao: NombreEmpledao,
              ApellidoEmpleado: ApellidoEmpleado,
              TelefonoEmpleado: TelefonoEmpleado,
              Idusuario: Idusuario,
            })
          });

          const json = await respuesta.text();
          console.log(json);
          Alert.alert("¡Mandaditos Ya!", json);
      }catch(error){
        console.log(error);
      }
    };
  };

  return (
    <ScrollView 
    style = {{flex: 1, backgroundColor: '#FFFFFF'}}
    showsVerticalScrollIndicator={false}>
      <View style={styles.brandView}>
          <Ionicons name="ios-person-add" size={80} color='#5004AD'/>
          <Text style={styles.brandViewText}>Mandaditos Ya!</Text>
        </View>

      <View style={styles.bottomView}>
        <View style={{padding: 40}}>
          <Text style={{color:'#4632A1', fontSize:34, textAlign: 'center'}}>Crear empleado</Text>

          <View style={{marginTop: 10}}>
              <TextInput
                  value={NombreEmpledao}
                  onChangeText={setNombreEmpledao}
                    placeholder="Ingrese su nombre"
                    style={styles.textInput}>
            </TextInput>

            <TextInput 
              value={ApellidoEmpleado}
              onChangeText={setApellidoEmpleado}
                placeholder="Ingrese su apellido"
                style={styles.textInput}>
            </TextInput>

            <TextInput 
              value={TelefonoEmpleado}
              onChangeText={setTelefonoEmpleado}
                placeholder="Ingrese su numero de telefono"
                style={styles.textInput}>
            </TextInput>
            
          </View>

          <View style={styles.buttonsContainer}>
              <Button onPress={guardar}
                title="Registrase"
                buttonStyle={{
                  backgroundColor: '#5004AD',
                  borderWidth: 2,
                  borderColor: '#5004AD',
                  borderRadius: 30,
                  padding: 15
                }}
                containerStyle={{
                  width: 250,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
                titleStyle={{ fontWeight: 'bold' }}
              />
          </View>
        </View>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  brandView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  brandViewText: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  bottomView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
  textInput: {
    padding: 10,
    paddingStart: 30,
    width: '100%',
    height: 60,
    marginTop: 18,
    borderRadius: 30,
    backgroundColor: '#F1F1F1',
  },
  forgotPassView: {
    height: 90,
    paddingStart: 10,
    marginTop: 10,
    flexDirection: 'row'
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 30,
    position: 'relative'
  },
});