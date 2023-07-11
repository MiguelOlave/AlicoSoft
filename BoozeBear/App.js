import { View } from "react-native";
import MainStack from "./navigation/MainStack";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <MainStack />
    </View>
  );
}
