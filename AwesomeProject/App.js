import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Mygoal from './src/Mygoal'
import TicTac from './src/TicTac'
import Movie from './src/Movie'
export default function App() {
  return (
    <View style={styles.container}>
     <Movie/>
     
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: 'white',
  marginTop: 20
  },
});
