import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Agregar from './Componentes/Botones_Agregar';
import V_or_R from './Componentes/Botones_Categorias';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      
      <View style={styles.inicio}>
      <Text style={styles.Text} >LOGO</Text>
      <Agregar/>
      <StatusBar style="auto" />
      </View>
    
      <View style={styles.container}>
        <Text style={styles.Text} >Mi primer aplicación :D</Text>
        <Text style={styles.Text} >COOL</Text>
        <V_or_R/>
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
    flexDirection: "column",
    marginTop:40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inicio:{
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop:40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   
  }

});
