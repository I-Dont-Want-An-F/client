import { TabRouter } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {GlobalStyles} from '../shared/GlobalStyles';

export default function DetailsScreen({ route, navigation }) {

const comments =[
  {
   post: route.params.post1,
   reply: route.params.post2,
   reply2: route.params.post3,
  },
  {
    post: route.params.post4,
  },
]
    return (
        <View style={{ flex: 1, padding: 20}}>
            <Text style = {GlobalStyles.titleBig}> { route.params.number + ' - ' + route.params.name }</Text>
            <Text style = {GlobalStyles.titleSmall}>{ 'Professor: ' + route.params.prof }</Text>
            <View style = {GlobalStyles.background}>
            <Text style = {GlobalStyles.textSmall}>{ 'General rating: ' + route.params.rating}</Text>
            <Text style = {GlobalStyles.textSmall}>{ 'Homework frequency: ' + route.params.hw}</Text>
            <Text style = {GlobalStyles.textSmall}>{ 'Difficulty: ' + route.params.dif}</Text>
            <Text style = {GlobalStyles.textSmall}>{ 'Book requirement: ' + route.params.book}</Text>
            </View>

            <View style={Styles.container}>
                <Button  color={'#880808'} title="rate"    />  
                <Button color={'#880808'} title="comments"/>
                <Button color={'#880808'} title="Questions"/>  
                <Button color={'#880808'} title="both"/>
            </View>

            <Text style = {GlobalStyles.titleSmall}> Showing all posts: </Text>

            
            <FlatList data={comments} renderItem={({ item })=> (  
              <View style={GlobalStyles.background2}>
             <TouchableOpacity onPress= {() => navigation.navigate("Post", item)}> 
               <Text style={GlobalStyles.textSmall}> {item.post}</Text>
              </TouchableOpacity>   
              </View>
            )}/>
            

            <TextInput style = {Styles.post} placeholder = "post a reply">{}</TextInput>


            
        </View>
    )
    }


export const Styles = StyleSheet.create({
    container: {
      //flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      justifyContent: 'center',
      margin : 5,
    },
    post:{
      textAlign: "center",
      alignSelf: "center",
      width: 350,
      borderWidth: 1,
      borderRadius: 5, 
      marginTop: 15,
      padding: 10,
    },
    box:{
      borderWidth: 1, 
      margin: 5,
      padding: 5,
      fontSize: 15 
    },
     
  });