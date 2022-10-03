import {React,  useState } from 'react';
import {Text } from 'react-native';
import { GlobalStyles } from '../stlyes/Global';


export default function HomeScreen() {
    return (
        <Text style={GlobalStyles.text} > This is the home screen </Text>
    )
}