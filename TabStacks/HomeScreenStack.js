import { React } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from  '../screens/HomeScreen';

const Stack = createStackNavigator();


export default function HomeScreenStack () {
    <Stack.Navigator>
        <Stack.Screen>
            name="Home"
            component={HomeScreen}
        </Stack.Screen>
    </Stack.Navigator>
}