import {React,  useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../../stlyes/Global';

//super rough draft

const classList = [
{name: "Cs 262", rating: "4.8", hw: "weekly", dif: "3.2", comment: "This class is amazing and the proff is the best. Please give us a good grade ",comment2:"I would take again", book: "no", key: 0},
{name:"Cs 112", rating: "4.5", hw:"weekly",dif:"2.9", comment: "good",comment2: "the labs were so boring", book: "no", key: 1},
{name: "Engr 220", rating: "2.1",hw:"never", dif:"4.3", comment: "engineers smell", comment2: "The first lab was terrible", book:"idk", key: 2}, ];
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
