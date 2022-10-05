import { React } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ClassScreen } from '../screens/ClassScreen';

const Stack = createStackNavigator();


export default function ScreenStack () {
    <Stack.Navigator>
        <Stack.Screen>
            name="Classes"
            component={ClassScreen}
        </Stack.Screen>
    </Stack.Navigator>
}