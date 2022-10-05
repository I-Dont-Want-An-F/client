import { React } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MessageScreen } from '../screens/MessageScreen';

const Stack = createStackNavigator();


export default function ScreenStack () {
    <Stack.Navigator>
        <Stack.Screen>
            name="Messages"
            component={MessageScreen}
        </Stack.Screen>
    </Stack.Navigator>
}