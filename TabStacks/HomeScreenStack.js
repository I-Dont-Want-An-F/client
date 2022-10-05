import { React } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from  '../screens/HomeScreen';

const Stack = createStackNavigator();


export default function HomeScreenStack () {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={HomeScreen} >
            </Stack.Screen>
        </Stack.Navigator>
    )
}