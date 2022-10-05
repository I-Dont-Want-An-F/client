import {React,  useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { GlobalStyles } from '../../stlyes/Global';


export default function ClassScreen() {
    return (
        <View style={{padding: 10}}>
          <Text style={GlobalStyles.text} > This is the class screen </Text>
        </View> 
    )
}

