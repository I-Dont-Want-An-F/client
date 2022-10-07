//This js file creates a class that using an array? to generate the same page for each class 

import {React, useState} from 'react';
import {  View, Text,TextInput } from 'react-native'; 
import { GlobalStyles } from '../../stlyes/Global';




export default function Classes ({ route, navigation }) {
  const [comments, setComments] = useState();
  const [questions, setQuestions] = useState();
    return (
      <View>
        <Text style= {GlobalStyles.header}>{ route.params.name } </Text>
        <Text style={GlobalStyles.text2}>  Rating: {route.params.rating}/5</Text>
        <Text style={GlobalStyles.text2}> 
        Homework: {route.params.hw} {"\n"}
        Difficuilty: {route.params.dif}/5 </Text>
        <Text style= {GlobalStyles.text}> {"\n"} Comments:  </Text>
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