/**
 * The App.js implements the basic stack navigator of the app.
 */

import 'react-native-gesture-handler';
import { React } from 'react';
import { NavigationContainer, View } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import MessageScreen from './screens/Messages';
import ContactsScreen from './screens/Contacts';
import DetailScreen from './screens/DetailScreen';
import SubDetailsScreen from './screens/SubDetails';
import SignInScreen from './screens/SignInScreen';
import PostScreen from './screens/PostScreen';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';
import RateScreen from './screens/RateScreen';
import OnlineHelp from './screens/OnlineHelp';
import RateSubmit from './screens/RateSubmit'
import { Button, StyleSheet } from 'react-native';
import { LogBox } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
    LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
    LogBox.ignoreAllLogs();//Ignore all log notifications

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='SignInScreen' screenOptions={{ headerTitleAlign: 'center' }} >
                <Stack.Screen name='Sign In' component={SignInScreen} />
                <Stack.Screen name='Sign Up' component={SignUpScreen} />
                <Stack.Screen name='Home' component={HomeScreen}
                    options={({ navigation }) => ({
                        headerRight: () => (<Button color='#98AFC7' title='search' onPress={() => (navigation.navigate('Search'))} />),
                        headerLeft: () => (<Button color='#98AFC7' title="👤" onPress={() => (navigation.navigate('Profile'))} />),
                    })} />
                <Stack.Screen name='Post' component={PostScreen}
                    options={({ navigation }) => ({
                        headerRight: () => (<Button color='#98AFC7' title='Messages' onPress={() => (navigation.navigate('Contacts'))} />)
                    })} />
                <Stack.Screen name='Help' component={OnlineHelp} />
                <Stack.Screen name='Details' component={DetailScreen} />
                <Stack.Screen name='SubDetails' component={SubDetailsScreen} />
                <Stack.Screen name='Search' component={SearchScreen} />
                <Stack.Screen name='Rate' component={RateScreen} />
                <Stack.Screen name='Messages' component={MessageScreen} />
                <Stack.Screen name='Contacts' component={ContactsScreen} />
                <Stack.Screen name='RateSubmit' component={RateSubmit} />
                <Stack.Screen name='Profile' component={ProfileScreen}
                    options={({ navigation }) => ({
                        headerRight: () => (<Button color='#98AFC7' title='Messages' onPress={() => (navigation.navigate('Contacts'))} />)
                    })} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};