import React, { useState } from 'react'
import { View, StyleSheet, Modal, Text, TouchableOpacity } from 'react-native'
import Agregar from '../Componentes/Btn_Agregar'
import Informacion from '../Componentes/Modal_info'
import asks from '../database/Preguntas_VoR.json'

const Screen_VoR = ({ navigation }) => {

    // comentario racista

    const [currentQuestion, setCurrentQuestion] = useState();
    const [level, setLevel] = useState("Hot");
    const asksVerdad = asks.asksVerdad.filter((ask) => ask.category === level);
    const asksReto = asks.asksReto.filter((ask) => ask.category === level);
    const muestreVerdad = () => {
        const random = Math.floor(Math.random() * asksVerdad.length);
        setCurrentQuestion(asksVerdad[random]?.name);
    };
    const muestreReto = () => {
        const random = Math.floor(Math.random() * asksReto.length);
        setCurrentQuestion(asksReto[random]?.name);
    };


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
                style={style.contenido}
            >
                <View
                    style={{
                        alignContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Text>
                        (NOMBRE DE JUGADOR):
                    </Text>
                    <Text>
                        {currentQuestion}
                    </Text>
                </View>
                <View
                    style={style.contenido}
                >
                    <Text>
                        SIGUIENTE JUGADOR:
                    </Text>
                    <Text>
                        ALAN TURING
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row'
                        }}
                    >
                        <Agregar
                            text='Verdad'
                            onPress={muestreVerdad}
                        />
                        <Agregar
                            text='Reto'
                            onPress={muestreReto}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Screen_VoR

const style = StyleSheet.create({
    superior: {
        marginTop: 20,
        marginHorizontal: 10,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
    },
    contenido: {
        flexDirection: "column",
        marginTop: 10,
        width: '100%',
        backgroundColor: '#17B862',
        alignItems: 'center',
        justifyContent: 'center',
    }
});