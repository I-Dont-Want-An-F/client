import {React,  useState } from 'react';
import {Button, TextInput, Text,View,  } from 'react-native';
import { GlobalStyles } from '../../stlyes/Global';



export default function Cs262({ navigation }) {
    return (
      <View>
      <Text style={GlobalStyles.header}> Cs262 </Text>
  
      <Text>                         Insert details about this class {"\n"} </Text> 
      <TextInput 
      style={GlobalStyles.input}
      placeholder= "Ask a question or post a comment"
      />
      </View>
    )
}