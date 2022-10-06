import {React,  useState } from 'react';
import { Text,TextInput,View } from 'react-native';
import { GlobalStyles } from '../../stlyes/Global';


//add some text before to make it look like a conversaion 


export default function HomeScreen({ navigation }) {
    return (
        <View> 
        <Text style={GlobalStyles.text} > I Dont Want An F {"\n"}</Text>
        <TextInput 
      style={GlobalStyles.input}
      placeholder= "Ask a question or post a comment"
      />
</View>
    )
}