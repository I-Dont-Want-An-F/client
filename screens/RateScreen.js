import { TabRouter } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {GlobalStyles} from '../shared/GlobalStyles';

export default function RateScreen({ route, navigation }) {
    return(
      
    <View style={{ flex: 1, padding: 20}}>
      <Text style = {GlobalStyles.titleBig}>  Rating Math 171 - Calculus 1 </Text>
      <Text style = {GlobalStyles.titleSmall}>  Professor: Chris Mosely</Text>
      <Text style = {GlobalStyles.textSmall}> General rating </Text>
      <TextInput style= {GlobalStyles.textIn2}> 0-5</TextInput>
      <Text style = {GlobalStyles.textSmall}> Homework </Text>
      <TextInput style= {GlobalStyles.textIn2}> none, weekly, daily</TextInput>
      <Text style = {GlobalStyles.textSmall}> Difficulity </Text>
      <TextInput style= {GlobalStyles.textIn2}> easy, medium, hard</TextInput>
      <Text style = {GlobalStyles.textSmall}> Book requirement</Text>
      <TextInput style= {GlobalStyles.textIn2}> yes, no</TextInput>
      <Text style = {GlobalStyles.textSmall}>  </Text>

       
        <Button  color={'#880808'} title="home" onPress={ () => (navigation.navigate('Home'))}   />  
    </View>
    )
}