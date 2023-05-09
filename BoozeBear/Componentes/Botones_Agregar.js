import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Agregar(){
  // ok
    return(
      <TouchableOpacity>
           <LinearGradient
            // Button Linear Gradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.button}>
            <Text style={styles.text}>+</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text:{
      marginTop: -35,
      padding: 10,      
      color: "#fff",
      fontSize: 75,
      fontWeight: "bold"
    },
    button:{
        width:60,
        height: 60,
        borderRadius: 50,
    }
  });