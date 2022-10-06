import {React,  useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../../stlyes/Global';

//super rough draft

const classList = [
{name: "Cs 262", rating: "5", comment: "This class is amazing and the proff is the best. Please give us a good grade ", key: 0},
{name: "engr 220", rating: "2", comment: "engineers smell", key: 1},
{name:"cs 112", rating: "4", comment: "good", key: 2}];
const listItems = classList.map((c) =>
  < ClassContainerElemenet key={c.key} c={c.name} />
);

function ClassContainerElemenet (props) {
  return (
    <Text> {props.c}</Text>
  )
}


export default function ClassScreen({navigation}) {
    return (
      <View>
        <FlatList data={classList} renderItem={({ item })=> (  
           <TouchableOpacity onPress= {()=> navigation.navigate("Classes", item)}>   
               <Text style= {GlobalStyles.list}> { item.name } </Text> 
           </TouchableOpacity>                                           
       )} />   
      </View>
    )
}

