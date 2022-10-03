import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GlobalStyles } from './stlyes/Global';
import HomeScreen from './screens/HomeScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer style={GlobalStyles.container}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


