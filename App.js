import 'react-native-gesture-handler';
import { React } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import DetailScreen from './screens/DetailScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';
import { Button, StyleSheet, Text  } from 'react-native';
import { ScreenStack } from 'react-native-screens';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName='Sign In Screen' screenOptions={{headerTitleAlign: 'center' }} >
              <Stack.Screen name='Sign In' component={SignInScreen}/>
              <Stack.Screen name='Sign Up' component={SignUpScreen}/>
              <Stack.Screen name='Home' component={HomeScreen}   
                            options={({ navigation }) => ({
                                      headerRight: () => (
                                          <Button title="Search" onPress={ () => (navigation.navigate('Search'))} />
                                          ),
                                      headerLeft: () => (
                                        <Button title="👤" onPress={ () => (navigation.navigate('Profile'))} />
                                      )
                                          })} />
                <Stack.Screen name='Details' component={DetailScreen}/>
                <Stack.Screen name='Search' component={SearchScreen}/> 
                <Stack.Screen name='Profile' component={ProfileScreen}/> 
          </Stack.Navigator>
      </NavigationContainer>
  );
}