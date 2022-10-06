import React from 'react';
import {  View, Text,TextInput } from 'react-native'; 
import { GlobalStyles } from '../../stlyes/Global';


 //add some margins add a question and reply 

export default function Classes ({ route, navigation }) {
    return (
      <View>
        <Text style= {GlobalStyles.header}>{ route.params.name } </Text>
        <Text style={GlobalStyles.text}>  Rating: {route.params.rating} out of 5</Text>
        <Text style= {GlobalStyles.text}> Comments:  </Text>
        <Text style={GlobalStyles.box}> User123: {route.params.comment}  </Text> 
        <Text style={GlobalStyles.box}> User124: {route.params.comment2}  </Text> 
        <TextInput 
      style={GlobalStyles.input}
      placeholder= "Post a comment"
      />
      <Text style= {GlobalStyles.text}> Questions:  </Text>
        <Text style={GlobalStyles.box}> User456: Do we need textbooks {"\n"}{"\n"}User789: {route.params.book}</Text> 
        <TextInput 
      style={GlobalStyles.input}
      placeholder= "Post a question"
      />
      </View>
    );
  }