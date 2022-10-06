import React from 'react';
import {  View, Text, } from 'react-native'; 


 

export default function Classes ({ route, navigation }) {
    return (
      <View >
          <Text >{ route.params.name }</Text>
          {/* <Text>{ route.params.rating }</Text>
          <Text>{ route.params.description }</Text> */}
      </View>
    );
  }