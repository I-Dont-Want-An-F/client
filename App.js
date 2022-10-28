import 'react-native-gesture-handler';
import { React } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import { Button } from 'react-native';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import SignUpScreen from './screens/SignInScreen/SignInScreen';
import SignUpScreen from './screens/SignInScreen/SignInScreen';


const Stack = createNativeStackNavigator();

const App = () => {

    return (
      <SafeAreaView style={styles.root}>
        <SignUpScreen />
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: 'F9FBFC',
    }
  });


export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName='Home' screenOptions={{headerTitleAlign: 'center' }} >
              <Stack.Screen name='Home' component={HomeScreen}   
                            options={({ navigation }) => ({
                                      headerRight: () => (
                                          <Button title="Search" onPress={ () => (navigation.navigate('Search'))} />
                                          ),
                                      headerLeft: () => (
                                        <Button title="👤" onPress={ () => (navigation.navigate('Profile'))} />
                                      )
                                          
                                          })} />
              <Stack.Screen name='Search' component={SearchScreen}/> 
              <Stack.Screen name='Profile' component={ProfileScreen}/> 
          </Stack.Navigator>
      </NavigationContainer>
  );
}