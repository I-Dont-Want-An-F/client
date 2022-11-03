import { TabRouter } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {GlobalStyles} from '../shared/GlobalStyles';




export default function DetailsScreen({ route, navigation }) {
const comments =[ //used to create the PostScreen
  {
   user1: route.params.user1,
   user2: route.params.user2,
   user3: route.params.user3,
   post: route.params.post1,
   reply: route.params.post2,
   reply2: route.params.post3,
  },
  { 
    user1: route.params.user1,
    post: route.params.post4,
  },
]
 

if(route.params.prof2==null){ // if there is 1 proff
  
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
  
  return ( // if there is 2 proff, right now i created two pages, however this can be changed to one with the database
    <View style={{ flex: 1, padding: 20}}>
        <Text style = {GlobalStyles.titleBig}> { route.params.number + ' - ' + route.params.name }</Text>
        <Text style = {GlobalStyles.titleSmall}>{ 'Professors: ' + route.params.prof + ' and ' +route.params.prof2}</Text>
         
        <View style={Styles.container}>
            <Button  color={'#880808'} title={route.params.prof} onPress={ () => (navigation.navigate('Proffesor'))}/>
            <View style={Styles.space2} />   
            <Button color={'#880808'} title={route.params.prof2} onPress={ () => (navigation.navigate('Proffesor2'))}/>
        </View>


        <View style = {GlobalStyles.background}>
        <Text style = {GlobalStyles.textSmall}>{ 'General rating: ' + route.params.rating}</Text>
        <Text style = {GlobalStyles.textSmall}>{ 'Homework frequency: ' + route.params.hw}</Text>
        <Text style = {GlobalStyles.textSmall}>{ 'Difficulty: ' + route.params.dif}</Text>
        <Text style = {GlobalStyles.textSmall}>{ 'Book requirement: ' + route.params.book}</Text>
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