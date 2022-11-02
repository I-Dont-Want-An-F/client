import { TabRouter } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {GlobalStyles} from '../shared/GlobalStyles';

export default function DetailsScreen({ route, navigation }) {
    return (
        <View style={{ flex: 1, padding: 20}}>
            <Text style = {GlobalStyles.titleBig}> { route.params.number + ' - ' + route.params.name }</Text>
            <Text style = {GlobalStyles.titleSmall}>{ 'Professor: ' + route.params.prof }</Text>
            <View style ={GlobalStyles.background}>
            <Text style = {GlobalStyles.textSmall}>{ 'General rating: ' + route.params.rating}</Text>
            <Text style = {GlobalStyles.textSmall}>{ 'Homework frequency: ' + route.params.hw}</Text>
            <Text style = {GlobalStyles.textSmall}>{ 'Difficulty: ' + route.params.dif}</Text>
            <Text style = {GlobalStyles.textSmall}>{ 'Book requirement: ' + route.params.book}</Text>
            </View>
            <Text style = {Styles.post}>{ route.params.post1 }</Text>
            <Text style = {Styles.post}>{ route.params.post2 }</Text>
            <Text style = {Styles.post}>{ route.params.post3 }</Text>
            <TextInput style = {Styles.post} placeholder = "post a comment">{}</TextInput>
        </View>
    );
}

export const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
        textAlign:"center",
        fontSize: 20,
        fontWeight: "bold",
        margin: 10,
    },
    sub_header: {
      textAlign:"center",
      fontWeight: "bold",
      marginTop: 5,
      marginBottom: 5,
      fontSize: 15,
    },
    text: {
        textAlign:"left",
        marginTop: 10,
        marginBottom: 5,
        fontSize: 15,
      },
    list:{
      color:"gray",
      fontSize: 30,
      fontWeight: "bold",
      textAlign:"center",
    },
    input:{
      textAlign: "center",
      alignSelf: "center",
      width: 300,
      height: 40,
      borderWidth: 1,
      borderRadius: 5, 
      padding: 10,
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
    }
  });