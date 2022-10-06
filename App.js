import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GlobalStyles } from './stlyes/Global';
import HomeScreenStack from './TabStacks/HomeScreenStack';
import ClassScreenStack from './TabStacks/ClassScreenStack';
import MessageScreenStack from './TabStacks/MessageScreenStack';
import ProfileScreenStack from './TabStacks/ProfileScreenStack';
import ClassScreen from './screens/ClassScreen/ClassScreen';

 
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
 

export default function App() {
  return (
      <NavigationContainer style={GlobalStyles.container}>
          <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name="HomeScreenStack" component={HomeScreenStack} options={{ headerShown: false }} />
            <Tab.Screen name="ClassScreenStack"  component={ClassScreenStack} options={{ headerShown: false }} />
            <Tab.Screen name="MessageScreenStack" component={MessageScreenStack} options={{ headerShown: false }} />
            <Tab.Screen name="ProfileScreenStack" component={ProfileScreenStack} options={{ headerShown: false }} />
          </Tab.Navigator>
          
      </NavigationContainer>
  );
}


