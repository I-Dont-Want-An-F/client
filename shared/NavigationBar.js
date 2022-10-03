import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { NavigationStlyes } from '../stlyes/NavigationBar';
import { HomeScreen } from '../screens/HomeScreen';

export default function NavigationBar ({ navigation }) {
    return ( 
        <View style={NavigationStlyes.Bar}>
            <TouchableOpacity  onPress={() => navigation.navigate('HomeScreen')}>  
                <Text>Home</Text>
            </TouchableOpacity>
        </View>
    )
}

