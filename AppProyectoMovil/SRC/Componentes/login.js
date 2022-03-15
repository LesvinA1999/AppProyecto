import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {Text, ScrollView, ImageBackground, Dimensions, View, TextInput, StyleSheet, Alert} from 'react-native';
import { ListItem, Avatar, CheckBox, Button } from 'react-native-elements'


const LoginScreen = ({navigation}) => {

  const [Usuario, setUsuario] = useState('');
  const [Contrasena, setContrasena] = useState('');

  const iniciarSesion = async () => {
    if(!Usuario || !Contrasena){
      console.log("No puede dejar los campos vacios");
      Alert.alert("UNICA-DEV", "No puede dejar los campos vacios");
    }
    else{
      try{
        const respuesta = await fetch(
          'http://192.168.0.6:7000/api/autenticacion/inicioSesion',
          {
            method: "POST", 
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              Usuario: Usuario,
              Contrasena: Contrasena
            })
          });
          
        const json = await respuesta.json();

        console.log(json);
      }catch(error){
        console.log(error);
      }
    };
  };

  return (
    <ScrollView 
    style = {{flex: 1, backgroundColor: '#FFFFFF'}}
    showsVerticalScrollIndicator={false}>
      <ImageBackground 
        source={require('./img/Background2.png')}
        style={{
          height: Dimensions.get('window').height / 2.5,
      }}>
        <View style={styles.brandView}>
          <Ionicons name="ios-bicycle-sharp" size={100} color='#FFFFFF'/>
          <Text style={styles.brandViewText}>Mandaditos Ya!</Text>
        </View>
      </ImageBackground>

      <View style={styles.bottomView}>
        <View style={{padding: 40}}>
          <Text style={{color:'#4632A1', fontSize:34}}>Bienvenidos</Text>
          <Text>
            ¿No tienes una cuenta?
            <Text style={{color: 'red', fontStyle: 'italic'}}
            onPress={() => navigation.navigate('Usuarios')}>
              {'   '}
              Registrarse ahora
            </Text>
          </Text>

          <View style={{marginTop: 10}}>
              <TextInput
                  value={Usuario}
                  onChangeText={setUsuario}
                    placeholder="ejemplo@gmail.com"
                    style={styles.textInput}>
            </TextInput>

            <TextInput 
              value={Contrasena}
              onChangeText={setContrasena}
                placeholder="contraseña"
                style={styles.textInput}
                secureTextEntry={true}>
            </TextInput>
          </View>

          <View style={styles.forgotPassView}>
            <View style={{flex: 1, marginLeft:-20}}>
              <ListItem noBorder>
                <CheckBox checked={true} color= '#4632A1' size={30}/>
                <Text style={{color: '#8F9195', alignSelf: 'center', fontSize:12}}>Ver contraseña</Text>
              </ListItem>
            </View>
          </View>

          <View style={styles.buttonsContainer}>
              <Button onPress={iniciarSesion}
                title="LOG IN"
                buttonStyle={{
                  backgroundColor: 'purple',
                  borderWidth: 2,
                  borderColor: 'purple',
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

export default LoginScreen;

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
    marginVertical: 0,
    position: 'relative'
  },
});