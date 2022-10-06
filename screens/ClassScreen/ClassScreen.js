import {React,  useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../../stlyes/Global';

//super rough draft

const classList = [{name: "Cs 262", key: 0}, {name: "engr 220", key: 1},{name:"cs 112", key: 2}];
const listItems = classList.map((c) =>
  < ClassContainerElemenet key={c.key} c={c.name} />
);

function ClassContainerElemenet (props) {
  return (
    <Text> {props.c}</Text>
  )
}



export default function ClassScreen(navigation) {
    return (
      <View>
        <FlatList data={classList} renderItem={({ item })=> (  
           <TouchableOpacity onPress={() => navigation.navigate('class', item)}>   
               <Text> { item.name } </Text> 
           </TouchableOpacity>                                           // This doesnt work and Idk how to add navigation to app.js
       )} />   
      </View>
    )
}

