import { React } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ClassScreen from '../screens/ClassScreen/ClassScreen';
import Engr209 from '../screens/ClassScreen/Engr209';

const Stack = createStackNavigator();



export default function ClassScreenStack () {
    return (
    <Stack.Navigator initialRouteName="ClassScreen">
        <Stack.Screen name="Classes" component={ClassScreen} />
        <Stack.Screen name="Engr209" component={Engr209}/>
    </Stack.Navigator>
    )
}

