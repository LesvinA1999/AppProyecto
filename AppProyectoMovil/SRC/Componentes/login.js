import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useReducer, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Button, Alert, TouchableOpacity} from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
import ButtonGradient from './ButtonGradient';

const { width, height } = Dimensions.get('window')

export default function Login() {

  function SvgTop() {
    return (
      <Svg
      width={500}
      height={324}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M297.871 315.826c73.405 13.896 165.338-13.964 202.129-29.63V230H1.326v63.5c69.15-42.913 204.789 4.957 296.545 22.326z"
        fill="url(#prefix__paint0_linear_103:6)"
        fillOpacity={0.5}
      />
      <Path
        d="M237.716 308.627C110.226 338.066 30.987 318.618 0 304.77V0h500v304.77c-43.161-12.266-134.794-25.581-262.284 3.857z"
        fill="url(#prefix__paint1_linear_103:6)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear_103:6"
          x1={492.715}
          y1={231.205}
          x2={480.057}
          y2={364.215}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#3C75FF" />
          <Stop offset={1} stopColor="#7255E5" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear_103:6"
          x1={7.304}
          y1={4.155}
          x2={144.016}
          y2={422.041}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#3C75FF" />
          <Stop offset={1} stopColor="#7255E5" />
        </LinearGradient>
      </Defs>
    </Svg>
    )
  }

  const [Usuario, setUsuario] = useState();
  const [Contrasena, setContrasena] = useState();

  const iniciarSesion = async () => {
    if(!Usuario || !Contrasena){
      console.log("No puede dejar los campos vacios");
      Alert.alert("UNICADEV", "No puede dejar los campos vacios");
    }
    else{
      try{
        const respuesta = await fetch(
          'http://192.168.0.11:7000/api/autenticacion/inicioSesion',
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
        Alert.alert("UNICADEV", "Peticion procesada");
      }catch(error){
        console.log(error);
      }
    }
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerSVG}>
        <SvgTop/>
      </View>
      <View style={styles.container}>
        <Text style={styles.titulo}>Bienvenido</Text>
        <Text style={styles.subTitle}>Iniciar sesión con su cuenta</Text>
        <TextInput value={Usuario}
        onChangeText = {setUsuario}
          placeholder="ejemplo@gmail.com"
          style={styles.textInput}>
        </TextInput>

        <TextInput value={Contrasena}
        onChangeText={setContrasena}
          placeholder="contraseña"
          style={styles.textInput}
          secureTextEntry={true}>
        </TextInput>
        
        <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
        <View>
            <Button
              onPress={iniciarSesion}
              title="Iniciar Sesión"
              color="#3C75FF"
              accessibilityLabel="Learn more about this purple button"
            />
        </View>
        <Text style={styles.forgotPassword}>¿No tienes una cuenta?</Text>
        <StatusBar style="auto" />
      </View>
    </View>
      
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f1f1f1',
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSVG: {
    width: width,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 80,
    color: '#34434D',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
    color: 'gray',
  },
  textInput: {
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  forgotPassword: {
    fontSize: 14,
    color: 'gray',
    marginTop: 20
  },
  button: {
    
  },
  
});