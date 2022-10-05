import { React } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from  '../screens/HomeScreen/HomeScreen';

const Stack = createStackNavigator();


export default function HomeScreenStack () {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerTitleAlign: 'left' }} />
        </Stack.Navigator>
    )
}