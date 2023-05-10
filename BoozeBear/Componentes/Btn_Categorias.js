import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Btns_Categorias(){
    function VerdadoReto(){
        return(
            <TouchableOpacity>
            <LinearGradient
            // Button Linear Gradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.button}>
            <Text style={styles.text}>Verdad o Reto</Text>
            </LinearGradient>
         </TouchableOpacity> 
        );
}
function QuienEsMas(){
    return(
        <TouchableOpacity>
        <LinearGradient
        // Button Linear Gradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.button}>
        <Text style={styles.text}>Quien es más</Text>
        </LinearGradient>
     </TouchableOpacity> 
    );
}
    return(
        <View style={styles.container}>
            <VerdadoReto/>
            <QuienEsMas/>
      </View>
    );
}

const styles = StyleSheet.create({
    text:{
      padding: 15,      
      color: "#fff",
      fontSize: 25,
      fontWeight: "bold"
    },
    button:{
        marginTop: 20,
        width:"80%",
        borderRadius: 40,
    },
    container: {
        flexDirection: "column",
        marginTop:40,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
  });