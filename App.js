import 'react-native-gesture-handler';
import { React } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import DetailScreen from './screens/DetailScreen';
import { Button } from 'react-native';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName='Home' screenOptions={{headerTitleAlign: 'center' }} >
              <Stack.Screen  name='Home' component={HomeScreen}   
                            options={({ navigation }) => ({
                                      headerRight: () => (
                                          <Button color='#FDDA0D' title='search'onPress={ () => (navigation.navigate('Search'))} /> 
                                          //I changed to #FDDA0D but not sure how it will look on android vs apple
                                          ),
                                      headerLeft: () => (
                                          <Button color='#FDDA0D' title="👤" onPress={ () => (navigation.navigate('Profile'))} />
                                          )
                                          })} />
                <Stack.Screen name='Details' component={DetailScreen}/>
                <Stack.Screen name='Search' component={SearchScreen}/> 
                <Stack.Screen name='Profile' component={ProfileScreen}/> 
          </Stack.Navigator>
      </NavigationContainer>
  );
}