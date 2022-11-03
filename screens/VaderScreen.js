//created by dylan, creates a new page off of details that shows the different proffesors 
import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {GlobalStyles} from '../shared/GlobalStyles';
     

export default function VanderScreen ({ route, navigation }) {
    return (
        <View style={{ flex: 1, padding: 20}}>
        <Text style = {GlobalStyles.titleBig}>  class </Text>
        <Text style = {GlobalStyles.titleSmall}>proff</Text>
        <View style = {GlobalStyles.background}>
        <Text style = {GlobalStyles.textSmall}>rating</Text>
        <Text style = {GlobalStyles.textSmall}>homework</Text>
        <Text style = {GlobalStyles.textSmall}>diff</Text>
        <Text style = {GlobalStyles.textSmall}>book</Text>
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

        
        {/* <FlatList data={comments} renderItem={({ item })=> (  
          <View style={GlobalStyles.background2}>
         <TouchableOpacity onPress= {() => navigation.navigate("Post", item)}> 
           <Text style={GlobalStyles.textSmall}> {item.user1} {item.post}</Text>
          </TouchableOpacity>   
          </View>
        )}/> */}
        

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