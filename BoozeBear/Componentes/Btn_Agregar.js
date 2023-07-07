import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const Agregar = (props) => {
    
    const {text, onPress} = props

    return(
        <TouchableOpacity
        onPress={onPress}
        style = {styles.button}
        >
            <Text style = {styles.text}>
                { text }
            </Text>
        </TouchableOpacity>
    )
}

export default Agregar


const styles = StyleSheet.create({
    text:{
      marginTop: 10,
      color: "red",
      fontWeight: "bold"
    },
    button:{
        width:60,
        height: 60,
        borderRadius: 50,
    }
  });