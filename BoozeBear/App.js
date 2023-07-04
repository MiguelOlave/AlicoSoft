import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Agregar from './Componentes/Btn_Agregar';
import Btns_Categorias from './Componentes/Btn_Categorias';
import { Image } from 'react-native';



export default function App() {
  return (

    <View style={{ flex: 1 }}>

      <View style={styles.inicio}>
        <Image source={require('./img/React.png')} style={styles.img} />
        <Agregar/>
        <StatusBar style="auto" />
      </View>
    
      <View style={styles.container}>
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
    marginTop:40,
    backgroundColor: 'orange',
    flexDirection: "row", 
    alignItems: 'center',
    justifyContent: "space-between",
    marginStart: 10,
    marginEnd: 10,
  },
  img:{
    height: 75,
    width: 75,
    marginStart: 1,
    resizeMode: 'contain',
  }
});
