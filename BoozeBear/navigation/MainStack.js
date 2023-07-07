import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Home from '../screens/Home'
import Profile from '../screens/Profile'

const Stack = createNativeStackNavigator()

const MainStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: true, //Esconde el titulo  del stack en la parte superior de la pantalla
                }}
            >
                <Stack.Screen
                    name = 'Home'
                    component = {Home}
                />
                <Stack.Screen
                    name = 'Profile'
                    component = {Profile}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack