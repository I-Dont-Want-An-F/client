import { React } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ClassScreen from '../screens/ClassScreen/ClassScreen';
import Search from '../shared/Search';
import Engr209 from '../screens/ClassScreen/Engr209';

const Stack = createStackNavigator();



export default function ClassScreenStack () {
    return (
    <Stack.Navigator initialRouteName="ClassScreen">
        <Stack.Screen name="Classes" component={ClassScreen} options={({ navigation }) => ({ headerRight: () => ( <Search navigation={navigation}/> ),  headerTitleAlign: 'left'  } )} />
        <Stack.Screen name="Engr209" component={Engr209}/>
    </Stack.Navigator>
    )
}
