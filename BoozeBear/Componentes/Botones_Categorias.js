import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function V_or_R(){
    return(
        <TouchableOpacity>
            <LinearGradient
                // Button Linear Gradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={styles.button}>
                <Text style={styles.text}>Verdad o reto</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text:{
        Color: 'gray',
        marginTop: 20,
        fontSize: 11
        
    },
    button: {  
        width: "10",
        height: 40

      
    }

})