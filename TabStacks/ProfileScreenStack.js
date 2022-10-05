import { React } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();


export default function ProfileScreenStack () {
    return (
        <Stack.Navigator initialRouteName='Profiles'>
            <Stack.Screen name="Profiles" component={ProfileScreen}>
            </Stack.Screen>
        </Stack.Navigator>
    )
}