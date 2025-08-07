import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function Btns_Categorias() {
  const navigation = useNavigation();

  function VerdadoReto() {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Screen_VoR");
        }}
      >
        <LinearGradient
          colors={["#FF5F6D", "#FFC371"]} // Degradado de los botones
        >
          <Text style={styles.text}>Verdad o reto</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  function QuienEsMas() {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Screen_QuienEsMas");
        }}
      >
        <LinearGradient
          colors={["#4c669f", "#3b5998", "#192f6a"]}
        >
          <Text style={styles.text}>Quien es más</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  function YoNuncaNunca() {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Screen_YoNunca");
        }}
      >
        <LinearGradient
          colors={["#FF5F6D", "#FFC371"]}
        >
          <Text style={styles.text}>Yo nunca nunca</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <View >
      {/* Contenido visible */}
      <View>
        <VerdadoReto />
        <QuienEsMas />
        <YoNuncaNunca />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
});
