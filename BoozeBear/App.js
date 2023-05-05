import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text} >Mi primer aplicación :D</Text>
      <Text style={styles.Text} >Trabajo y Rectitud</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  Text:{
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
