import React from 'react';
import {  View, Text, } from 'react-native'; 
import { GlobalStyles } from '../../stlyes/Global';


 

export default function Classes ({ route, navigation }) {
    return (
      <View >
          <Text style= {GlobalStyles.header}>{ route.params.name } </Text>
          <Text style={GlobalStyles.text}> {route.params.rating} out of 5</Text>
        <Text style= {GlobalStyles.text}> Comments: {"\n"} {route.params.comment} </Text>
      </View>
    );
  }