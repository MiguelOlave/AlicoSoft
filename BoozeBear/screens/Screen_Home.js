import React, { useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Animated, FlatList, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../store/game';
import Btns_Categorias from '../Componentes/Btn_Categorias';

const Screen_Home = ({ navigation }) => {

  const imgSources = [
    require('../img/BoozeBearLogo.png'),
    require('../img/ImageQuienEsMas.png'),
    require('../img/ImageVerdadoReto.png'),
    require('../img/ImageYoNunca.png'),
    require('../img/React.png'),
  ];

  const scrollX = useRef(new Animated.Value(0)).current;
  const ITEM_WIDTH = 200;  // Ancho de cada imagen (debe coincidir con `CarruselImage`)

  const renderImg = ({ item, index }) => {
    const inputRange = [
      (index - 1) * ITEM_WIDTH, // Imágenes anteriores
      index * ITEM_WIDTH, // Imagen seleccionada
      (index + 1) * ITEM_WIDTH, // Imágenes siguientes
    ];

    const translateY = scrollX.interpolate({
      inputRange,
      outputRange: [0, -60, 0], // Subir la imagen seleccionada
      extrapolate: 'clamp',
    });

    return (
      <Animated.View style={{ transform: [{ translateY }] }}>
        <Image source={item} style={styles.CarruselImage} />
      </Animated.View>
    );
  };

  const colorAnimation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(colorAnimation, {
          toValue: 1,
          duration: 6000,
          useNativeDriver: false,
        }),
        Animated.timing(colorAnimation, {
          toValue: 0,
          duration: 6000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, [colorAnimation]);

  const backgroundColor = colorAnimation.interpolate({
    inputRange: [0, 0.33, 0.66, 1],
    outputRange: ["#6a11cb", "#2575fc", "#ff512f", "#f09819"],
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Animated.View style={[StyleSheet.absoluteFillObject, { backgroundColor }]} />
      <View style={styles.inicio}>
        <TouchableOpacity onPress={() => navigation.navigate('Personas')}>
          <Image
            source={require('../img/AddUser.png')}
            style={{ width: 75, height: 75, resizeMode: 'contain' }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.categoriaContainer}>

        <View style={styles.imageContainer}>
          <Image
            source={require('../img/BoozeBearLogo.png')}
            style={{
              height: '100%',
              width: '100%',
              resizeMode: "contain",
            }}
          />
        </View>

        <View style={styles.flatListContainer}>
          {/* Carrusel de imágenes con FlatList animado */}
          <Animated.FlatList
            onScroll={Animated.event(
              [{
                nativeEvent: {
                  contentOffset: { x: scrollX }
                }
              }], { useNativeDriver: true })}
            data={imgSources}
            renderItem={renderImg}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"  // Para una animación más rápida al detenerse
            snapToInterval={ITEM_WIDTH}  // Asegúrate de que sea el ancho de la imagen
            snapToAlignment="center"  // Alínea las imágenes al centro
            scrollEventThrottle={16}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Screen_Home;

const styles = StyleSheet.create({
  inicio: {
    marginTop: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderColor: 'black',
    //borderWidth: 0.5,
    overflow: 'visible', // Asegura que no haya recorte en este contenedor
  },
  categoriaContainer: {
    borderColor: 'black',
    //borderWidth: 0.5,
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'visible', // Permite que los elementos del carrusel no se recorten
  },
  imageContainer: {
    borderColor: 'black',
    //borderWidth: 0.5,
    height: 250,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    overflow: 'visible', // También aquí, asegura visibilidad
  },
  flatListContainer: {
    borderColor: 'black',
    //borderWidth: 0.5,
    height: 280, // Aumentar la altura para dar más espacio
    paddingTop: 0, // Ajustar el espacio superior
    overflow: 'visible', // Asegura que la imagen no se corte
  },
  CarruselImage: {
    resizeMode: 'contain',
    width: 200,
    height: '100%',
  },
});

