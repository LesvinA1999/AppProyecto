import React from "react";
import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, View, FlatList, Dimensions, Image, SafeAreaView, Animated} from 'react-native';

import { LinearGradient } from "expo-linear-gradient";

const imagenesRestaurantes = [
    "https://images.unsplash.com/photo-1619881589316-56c7f9e6b587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1581306764199-a9cc376310c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    "https://buenprovecho.hn/wp-content/uploads/2020/09/Carne-asada-secundaria.png"
];

const imagenesSupermercados = [
    "https://lh5.googleusercontent.com/p/AF1QipPg2hMury-Pykm8Ej5Dm2WKEyTdnb676sR4wYpX=w500-h500-k-no",
    "https://d26m4ikkajfmz.cloudfront.net/wp-content/uploads/2020/03/Supermercados-La-Colonia.jpg",
    "https://maxidespensa.com.hn//backstage/files/formatos/logo/e1d950fe-a60d-4e3d-a7c4-ae617d66942a/despensa_familiar_logo.png"
];

const imagenesFarmacias = [
    "https://multiplaza-samantha.s3.amazonaws.com/uploads/post/v4_mobile/6432/v400_400_farmacias_del_ahorro_800x800.jpg",
    "https://metrocentro-samantha.s3.amazonaws.com/uploads/post/v4_mobile/3090/v400_400_FARMACIA_KIELSA_800x800.jpg",
    "https://pbs.twimg.com/media/CnVhdeiUIAAYX0n.jpg"
];

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ANCHO_CONTENEDOR = width * 0.4;
const ESPACIO_CONTENEDOR = (width - ANCHO_CONTENEDOR) / 6;
const ESPACIO = 10;
const ALTURA_BACKDROP = height * 0.5;

function Backdrop({ scrollX }) {
  return (
    <View
      style={[
        {
          position: "absolute",
          height: ALTURA_BACKDROP,
          top: 0,
          width: width,
        },
        StyleSheet.absoluteFillObject,
      ]}
    >
      {imagenesRestaurantes.map((imagen, index) => {
        const inputRange = [
          (index - 1) * ANCHO_CONTENEDOR,
          index * ANCHO_CONTENEDOR,
          (index + 1) * ANCHO_CONTENEDOR,
        ];

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
        });
        return (
          <Animated.Image
            key={index}
            source={{ uri: imagen }}
            style={[
              { width: width, height: ALTURA_BACKDROP, opacity },
              StyleSheet.absoluteFillObject,
            ]}
          />
        );
      })}
      <LinearGradient
        colors={["transparent", "white"]}
        style={{
          width,
          height: ALTURA_BACKDROP,
          position: "absolute",
          bottom: 0,
        }}
      />
    </View>
  );
}

export default function App() {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        snapToAlignment="start"
        contentContainerStyle={{
          paddingTop: 80,
          paddingHorizontal: ESPACIO_CONTENEDOR,
        }}
        snapToInterval={ANCHO_CONTENEDOR}
        decelerationRate={0}
        scrollEventThrottle={16}
        data={imagenesRestaurantes}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * ANCHO_CONTENEDOR,
            index * ANCHO_CONTENEDOR,
            (index + 1) * ANCHO_CONTENEDOR,
          ];

          const scrollY = scrollX.interpolate({
            inputRange,
            outputRange: [0, -50, 0],
          });
          return (
            <View style={{ width: ANCHO_CONTENEDOR }}>
              <Image source={{ uri: item }} style={styles.posterImage} />
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  {" "}
                  Restaurantes
                </Text>
            </View>
          );
        }}
      />

      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        snapToAlignment="start"
        contentContainerStyle={{
          paddingTop: 0,
          paddingHorizontal: ESPACIO_CONTENEDOR,
        }}
        snapToInterval={ANCHO_CONTENEDOR}
        decelerationRate={0}
        scrollEventThrottle={16}
        data={imagenesSupermercados}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * ANCHO_CONTENEDOR,
            index * ANCHO_CONTENEDOR,
            (index + 1) * ANCHO_CONTENEDOR,
          ];

          const scrollY = scrollX.interpolate({
            inputRange,
            outputRange: [0, -50, 0],
          });
          return (
            <View style={{ width: ANCHO_CONTENEDOR }}>
              <Image source={{ uri: item }} style={styles.posterImage} />
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  {" "}
                  Supermercados
                </Text>
            </View>
          );
        }}
      />

      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        snapToAlignment="start"
        contentContainerStyle={{
          paddingTop: 0,
          paddingHorizontal: ESPACIO_CONTENEDOR,
        }}
        snapToInterval={ANCHO_CONTENEDOR}
        decelerationRate={0}
        scrollEventThrottle={16}
        data={imagenesFarmacias}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * ANCHO_CONTENEDOR,
            index * ANCHO_CONTENEDOR,
            (index + 1) * ANCHO_CONTENEDOR,
          ];

          const scrollY = scrollX.interpolate({
            inputRange,
            outputRange: [0, -50, 0],
          });
          return (
            <View style={{ width: ANCHO_CONTENEDOR }}>
              <Image source={{ uri: item }} style={styles.posterImage} />
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  {" "}
                  Farmacia
                </Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    justifyContent: "center",
  },
  posterImage: {
    width: "78%",
    height: ANCHO_CONTENEDOR * 0.77,
    resizeMode: "cover",
    borderRadius: 12,
    margin: 0,
    marginBottom: 10,
  },
});