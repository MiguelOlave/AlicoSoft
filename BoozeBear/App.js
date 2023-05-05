import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Agregar from './Componentes/Boton_Agregar';
import V_Or_R from './Componentes/Botones_categorias';

export default function App() {
  return (
    <View style={styles.container}>
      <Agregar/>
      <V_Or_R/>
      <Text style={styles.Text} >Mi primer aplicación :D</Text>
      <Text style={styles.Text} >Trabajo y Rectitud amen</Text>
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
    marginTop:20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
