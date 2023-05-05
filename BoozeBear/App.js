import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Agregar from './Componentes/Botones_Agregar';

export default function App() {
  return (
      <View style={styles.inicio}>
      <Text style={styles.Text} >LOGO</Text>
      <Agregar/>
      <StatusBar style="auto" />
  
      <View style={styles.container}>
        <Text style={styles.Text} >Mi primer aplicación :D</Text>
        <Text style={styles.Text} >COOL</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );

  
}


const styles = StyleSheet.create({
  Text:{
  
    backgroundColor: 'white',
  },
  container: {

    marginTop:40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inicio:{
    alignItems: "flex-start",
    marginTop:40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
