import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Agregar from '../Componentes/Btn_Agregar'
import Informacion from '../Componentes/Modal_info'

const Screen_QuienEsMas = ({ navigation }) => {

  const [view, setView] = useState(false)

  return (
    <View
      style={{ flex: 1 }}
    >
      <Informacion
        view={view}
        setView={setView}
        text='En la pantalla saldrá el nombre de cada jugador con su respectivo reto o verdad, al terminar dale click  al boton de verdad o reto para que el siguiente jugador lo cumpla.'
      />
      <View
        style={style.superior}
      >
        <Agregar
          text='Inicio'
          onPress={() => { navigation.navigate('Screen_Home') }}
        />
        <Agregar
          text='Información'
          onPress={() => { setView(true); }}
        />
      </View>
      <View
        style={style.content}
      >
        <Text>
          ¿Cuál es el secreto de la juventud eterna?
        </Text>
        <View>
          <Agregar
            text='Siguiente'
            onPress={() => { }}
          />
        </View>
      </View>
    </View>
  )
}

export default Screen_QuienEsMas

const style = StyleSheet.create({
  superior: {
    marginTop: 20,
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
  },
  content: {
    flexDirection: "column",
    marginTop: 10,
    width: '100%',
    backgroundColor: '#17B862',
    alignItems: 'center',
    justifyContent: 'center',
  }
});