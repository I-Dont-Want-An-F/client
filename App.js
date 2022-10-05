import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GlobalStyles } from './stlyes/Global';
import HomeScreenStack from './TabStacks/HomeScreenStack';
import ClassScreenStack from './TabStacks/ClassScreenStack';
import MessageScreenStack from './TabStacks/MessageScreenStack';
import ProfileScreenStack from './TabStacks/ProfileScreenStack';

const Tab = createBottomTabNavigator();
//const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer style={GlobalStyles.container}>
          <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name="Home" component={HomeScreenStack} />
            <Tab.Screen name="Classes" component={ClassScreenStack} />
            <Tab.Screen name="Messages" component={MessageScreenStack} />
            <Tab.Screen name="Profiles" component={ProfileScreenStack} />
          </Tab.Navigator>
      </NavigationContainer>
  );
}


