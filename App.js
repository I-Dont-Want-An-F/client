import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { globalStyles } from './stlyes/global';

export default function App() {
  return (
    <View style={globalStyles.container}>
      <Text>This is a code change!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


