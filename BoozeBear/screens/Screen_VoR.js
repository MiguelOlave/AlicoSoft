import { useState } from "react";
import { View, Text } from "react-native";
import Agregar from "../Componentes/Btn_Agregar";
import asks from "../database/asks.json";

const Screen_VoR = () => {
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
    return (
        <View style={{ alignItems: "center" }}>
            <Text>VERDAD O RETO</Text>
            <Text>{currentQuestion}</Text>
            <View style={{ flexDirection: "row" }}>
                <Agregar text="Verdad" onPress={muestreVerdad} />
                <Agregar text="Reto" onPress={muestreReto} />
            </View>
        </View>
    );
};

export default Screen_VoR;
