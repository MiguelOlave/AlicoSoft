import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Agregar from './Componentes/Botones_Agregar';
//import { V_or_R } from './Componentes/Botones_Categorias';



export default function App() {
  return (
    <View style={styles.container}>
      <Agregar/>
      <Text style={styles.Text} >Mi primer aplicación :D</Text>
      <Text style={styles.Text} >Trabajo y Rectitud</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  Text:{
    backgroundColor: 'white',
  },
  container: {
    alignItems: "flex-start",
    marginTop:40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
