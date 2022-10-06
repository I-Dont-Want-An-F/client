import { React } from 'react';
import ClassScreen from '../screens/ClassScreen/ClassScreen';
import Search from '../shared/Search';
import Classes from '../screens/ClassScreen/Class'; 
import Cs262 from '../screens/ClassScreen/Cs262';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function ClassScreenStack () {
    return (
        <NavigationContainer independent= {true}> 
    <Stack.Navigator initialRouteName="ClassScreen">
        <Stack.Screen name="ClassScreen" component={ClassScreen} options={({ navigation }) => ({ headerRight: () => ( <Search navigation={navigation}/> ),  headerTitleAlign: 'left'  } )} />
       <Stack.Screen name= "Classes" component={Classes} />
       <Stack.Screen name= "Cs262" component={Cs262}  />
    </Stack.Navigator>
    </NavigationContainer>
    )
}
 