import React from "react";
import { View, Text } from "react-native";
import Agregar from "../Componentes/Btn_Agregar";
import Preguntas_Yonunca from "../database/Preguntas_YoNunca.json"

const Screen_YoNunca = () => {

  const [currentQuestion, setCurrentQuestion] = useState()

  const [level, setLevel] = useState("Nunca");
  const asksYoNunca = Preguntas_Yonunca.asksYoNunca.filter((ask) => ask.category === level);

  const MostarPregunta = () => {
    const random = Math.floor(Math.random() * asksYoNunca.lenght)
    setCurrentQuestion(asksYoNunca[random].name)
  }

  return (
    <View style = {{alignItems: "center"}}>
      <Text>YO NUNCA NUNCA</Text>
      <Text>{currentQuestion}</Text>
      <Agregar text = "Yo nunca" onPress = {MostarPregunta} />
    </View>
  )
}

export default Screen_YoNunca;
