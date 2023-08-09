import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Screen_Informacion from "./Screen_Informacion";
import Screen_VoR from "./Screen_VoR";
import Screen_QuienEsMas from "./Screen_QuienEsMas";
import Screen_YoNunca from "./Screen_YoNunca";

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: true, //Esconde el titulo  del stack en la parte superior de la pantalla
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen
                    name="Screen_Informacion"
                    component={Screen_Informacion}
                />
                <Stack.Screen name="Screen_VoR" component={Screen_VoR} />
                <Stack.Screen name="Screen_QuienEsMas" component={Screen_QuienEsMas} />
                <Stack.Screen name="Screen_YoNunca" component={Screen_YoNunca} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainStack;