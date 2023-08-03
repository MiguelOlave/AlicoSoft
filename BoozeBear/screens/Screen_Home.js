import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Agregar from '../Componentes/Btn_Agregar'
import Btns_Categorias from '../Componentes/Btn_Categorias';


const Screen_Home = ({ navigation }) => {
  return (

    <View style={{ flex: 1 }}>

      <View style={styles.inicio}>
        <Image source={require('../img/React.png')} style={styles.img} />
        <Agregar
          text="Agregar"
          onPress={() => { navigation.navigate('Screen_Informacion') }}
        />
        <StatusBar style="auto" />
      </View>

      <View style={styles.content}>
        <Btns_Categorias />
        <StatusBar style="auto" />
      </View>

    </View>
  )
}

export default Screen_Home

const styles = StyleSheet.create({
  Text: {
    backgroundColor: 'yellow',
  },
  content: {
    flexDirection: "column",
    marginTop: 10,
    width: '100%',
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inicio: {
    marginTop: 30,
    paddingHorizontal: 7,
    backgroundColor: 'orange',
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
  },
  img: {
    height: 75,
    width: 75,
    marginStart: 1,
    resizeMode: 'contain',
  }
});