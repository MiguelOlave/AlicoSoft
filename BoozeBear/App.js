import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Agregar from './Componentes/Btn_Agregar';
import Btns_Categorias from './Componentes/Btn_Categorias';


export default function App() {
  return (

    <View style={{ flex: 1 }}>

      <View style={styles.inicio}>
      <Text style={styles.Text} >LOGO</Text>
      <Agregar/>
      <StatusBar style="auto" />
      </View>
    
      <View style={styles.container}>
      <Text style={styles.Text} >content1</Text>
        <Btns_Categorias/>
        <StatusBar style="auto" />

      </View>

    </View>
   
  ); 
}


const styles = StyleSheet.create({
  Text:{
  
    backgroundColor: 'yellow',
  },
  container: {
    flexDirection: "column",
    marginTop:10,
    width: '100%',
    backgroundColor: '#17B862',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inicio:{
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop:40,
    backgroundColor: '#2E4053',
    alignItems: 'center',
    justifyContent: "space-between",
    marginStart: 10,
    marginEnd: 10,
   
  }

});
