import 'react-native-gesture-handler';
import { React } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import DetailScreen from './screens/DetailScreen';
import SignInScreen from './screens/SignInScreen';
import PostScreen from './screens/PostScreen';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';
import RateScreen from './screens/RateScreen';
import MessageScreen from './screens/Messages';
import ContactsScreen from './screens/Contacts'
import { Button, StyleSheet, Text  } from 'react-native';
import { ScreenStack } from 'react-native-screens';
import { GlobalStyles } from './shared/GlobalStyles';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
 
          <Stack.Navigator initialRouteName='SignInScreen' screenOptions={{headerTitleAlign: 'center' }} >
              <Stack.Screen name='Sign In' component={SignInScreen}/>
              <Stack.Screen name='Sign Up' component={SignUpScreen}/>
              <Stack.Screen name='Home' component={HomeScreen}   
                            options={({ navigation }) => ({
                                      headerRight: () => (
                                          <Button color='#A9A9A9' title='search'onPress={ () => (navigation.navigate('Search'))} /> 
                                          ),
                                      headerLeft: () => (
                                          <Button color='#A9A9A9' title="👤" onPress={ () => (navigation.navigate('Profile'))} />
                                          )
                                          })} />
                <Stack.Screen name='Post' component={PostScreen}/>                         
                <Stack.Screen name='Details' component={DetailScreen}/>
                <Stack.Screen name='Search' component={SearchScreen}/> 
                <Stack.Screen name ='Rate'  component={RateScreen}/>
                <Stack.Screen name ='Messages'  component={MessageScreen}/>
                <Stack.Screen name ='Contacts'  component={ContactsScreen}/>
                <Stack.Screen name='Profile' component={ProfileScreen}
                            options={({ navigation }) => ({
                                      headerRight: () => (
                                          <Button color='#FDDA0D' title='Messages'onPress={ () => (navigation.navigate('Contacts'))} /> 
                                          )})}/> 
          </Stack.Navigator>
      </NavigationContainer>
  );
}