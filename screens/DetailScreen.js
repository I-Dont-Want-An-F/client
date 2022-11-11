import { TabRouter } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { GlobalStyles } from '../shared/GlobalStyles';
import Post from '../shared/Post';

export default function DetailsScreen({ route, navigation }) {

  const [prof, setProf] = useState([]);
  const [rating, setRating] = useState([]);
  const [post, setPost] = useState([]);
  const [comments, setComment] = useState([]);

  const getProf = async () => {
      try {
      const response = await fetch('https://fast-woodland-72631.herokuapp.com/prof/' + route.params.shortname)
      const json = await response.json();
        setProf(json);
      } catch (error) {
        console.error(error);
      }
  }

  const getRating = async () => {
    try {
    const response = await fetch('https://fast-woodland-72631.herokuapp.com/rating/' + route.params.shortname)
    const json = await response.json();
      setRating(json);
    } catch (error) {
      console.error(error);
    }
  }

  const getPost = async () => {
    try {
    const response = await fetch('https://fast-woodland-72631.herokuapp.com/post/' + route.params.shortname)
    const json = await response.json();
      setPost(json);
    } catch (error) {
      console.error(error);
    }
  }

  const getComment = async () => {
    try {
    const response = await fetch('https://fast-woodland-72631.herokuapp.com/comments/' + route.params.shortname)
    const json = await response.json();
      setComment(json);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
      getProf();
      getRating();
      getPost();
      getComment();
    }, []);

    return (
      <KeyboardAvoidingView style={{ flex: 1, padding: 20}}>
        <Text style = {GlobalStyles.titleBig}> { route.params.shortname + ': ' + route.params.longname } </Text>

        <View style={GlobalStyles.titleSmall}>
          {prof.map((prof) => {
            return (
              <View>
                <Text style={GlobalStyles.titleSmall}>{'Professor: ' + prof.name}</Text>
              </View>
            );
          })}
        </View>

        <View style={GlobalStyles.titleSmall}>
          {rating.map((rating) => {
            return (
              <View style = {GlobalStyles.background}>
                <Text style = {GlobalStyles.textSmall}> { 'General rating: ' + rating.stars} </Text>
                <Text style = {GlobalStyles.textSmall}> { 'Homework frequency: ' + rating.hw} </Text>
                <Text style = {GlobalStyles.textSmall}> { 'Difficulty: ' + rating.dif} </Text>
                <Text style = {GlobalStyles.textSmall}> { 'Book requirement: ' + rating.book} </Text>
              </View>
            );
          })}
        </View>

        <View style={Styles.container}>
          <Button color={'#880808'} title="Rating" onPress={ () => (navigation.navigate('Rate'))}   />  
            <View style={Styles.space2} />   
          <Button color={'#880808'} title="Comments"/>
            <View style={Styles.space2} />   
          <Button color={'#880808'} title="Questions"/>  
            <View style={Styles.space2} />   
          <Button color={'#880808'} title="All"/>
        </View>

        <Text style = {GlobalStyles.titleSmall}> {'Showing all posts:'} </Text>

        <FlatList data={post} renderItem={({ item })=> (  
          <View style={GlobalStyles.background2}>
            <TouchableOpacity onPress= {() => navigation.navigate("Post", item)}> 
              <Text style={GlobalStyles.textSmall}> {item.id} {item.text}</Text>
            </TouchableOpacity>   
          </View>
        )}/>
            
        <TextInput style = {Styles.post} placeholder = "post a comment" onSubmitEditing={(event) => {setComment([...comments, {user1: "etl3:", post: event.nativeEvent.text}])}} >{}</TextInput>
      </KeyboardAvoidingView>
    );
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