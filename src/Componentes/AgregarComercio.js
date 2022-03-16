import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {Text, ScrollView, ImageBackground, Dimensions, View, TextInput, StyleSheet, Alert} from 'react-native';
import { ListItem, Avatar, CheckBox, Button } from 'react-native-elements'

export default function AgregarComercio() {
  const [NombreComercio, setNombreComercio] = useState(null);
  const [IdTipoComercio, setIdTipoComercio] = useState(null); 

  const presGuardar = async () => {
    if(!NombreComercio || !IdTipoComercio){
      console.log("Escriba los datos requeridos");
      Alert.alert("¡Mandaditos Ya!", "Escriba los datos requeridos");
    }
    else{
      try{
        const respuesta = await fetch(
          'http://192.168.0.4:7000/api/comercios/guardar',
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

          const json = await respuesta.text();
          console.log(json);
          Alert.alert("¡Mandaditos Ya!", json);
      }catch(error){
        console.log(error);
      }
    }
  }

return (
    <ScrollView 
    style = {{flex: 1, backgroundColor: '#FFFFFF'}}
    showsVerticalScrollIndicator={false}>
      <View style={styles.brandView}>
          <Ionicons name="ios-cart" size={100} color='#5004AD'/>
          <Text style={styles.brandViewText}>Mandaditos Ya!</Text>
        </View>

      <View style={styles.bottomView}>
        <View style={{padding: 40}}>
          <Text style={{color:'#4632A1', fontSize:34, textAlign: 'center'}}>Guardar datos del comercio</Text>

          <View style={{marginTop: 75}}>
              <TextInput
                  value={NombreComercio}
                  onChangeText={setNombreComercio}
                    placeholder="Ingrese nombre del comercio"
                    style={styles.textInput}>
            </TextInput>

            <TextInput 
              value={IdTipoComercio}
              onChangeText={setIdTipoComercio}
                placeholder="Seleccione el tipo de comercio"
                style={styles.textInput}>
            </TextInput>
          </View>

          <View style={styles.buttonsContainer}>
              <Button onPress={presGuardar}
                title="Registrar"
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