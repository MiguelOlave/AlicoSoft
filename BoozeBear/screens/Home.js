import { View, StyleSheet, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import Agregar from "../Componentes/Btn_Agregar";
import Btns_Categorias from "../Componentes/Btn_Categorias";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.inicio}>
        <Image source={require("../img/React.png")} style={styles.img} />
        <Agregar
          text="UN BOTON"
          onPress={() => {
            navigation.navigate("Screen_Informacion");
          }}
        />
        <StatusBar style="auto" />
      </View>
      <View style={styles.container}>
        <Btns_Categorias />
        <StatusBar style="auto" />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  Text: {
    backgroundColor: "yellow",
  },
  container: {
    flexDirection: "column",
    marginTop: 10,
    width: "100%",
    backgroundColor: "#17B862",
    alignItems: "center",
    justifyContent: "center",
  },
  inicio: {
    marginTop: 40,
    backgroundColor: "orange",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginStart: 10,
    marginEnd: 10,
  },
  img: {
    height: 75,
    width: 75,
    marginStart: 1,
    resizeMode: "contain",
  },
});
