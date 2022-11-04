//created by dylan, creates a new page off of details that shows the different proffesors 
 import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {GlobalStyles} from '../shared/GlobalStyles';
     

export default function SchuuScreen ({ route, navigation }) {
  const comments =[ //used to create the postscreen inside of vaderscreen
  {
   user1: 'xyz15',
   user2: 'abc34',
   user3: 'xyz15',
   post:  "Schuurman gave more homework than Vanderlinden",
   reply:  "How much more",
   reply2:  "about 30 minutes more",
  },
  { 
    user1: 'add124',
    post: 'Was super helpful with questions',
  },
]


  
  return (
      <View style={{ flex: 1, padding: 20}}>
      <Text style = {GlobalStyles.titleBig}>  CS 108- Intro to Computing </Text>
      <Text style = {GlobalStyles.titleSmall}>  Derek Schuurman</Text>
      <View style = {GlobalStyles.background}>
      <Text style = {GlobalStyles.textSmall}>Rating: 4.5</Text>
      <Text style = {GlobalStyles.textSmall}>Homework: weekly</Text>
      <Text style = {GlobalStyles.textSmall}>Difficulity: medium</Text>
      <Text style = {GlobalStyles.textSmall}>TextBook: none</Text>
      </View>

      <View style={Styles.container}>
          <Button  color={'#880808'} title="rate"    />  
         <View style={Styles.space2} />   
          <Button color={'#880808'} title="comments"/>
         <View style={Styles.space2} />   
         <Button color={'#880808'} title="Questions"/>  
         <View style={Styles.space2} />   
         <Button color={'#880808'} title="both"/>
      </View>

      <Text style = {GlobalStyles.titleSmall}> Showing all posts: </Text>

      
      <FlatList data={comments} renderItem={({ item })=> (  
        <View style={GlobalStyles.background2}>
       <TouchableOpacity onPress= {() => navigation.navigate("Post", item)}> 
         <Text style={GlobalStyles.textSmall}> {item.user1} {item.post}</Text>
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
          space2: {
            width: 10,  
            height: 20,
          },
           
        });