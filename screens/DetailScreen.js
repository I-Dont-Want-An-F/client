/**
 * Implements the class detail screen.
 * Created by Sophia, updated by Dylan.
 */

import React, { useEffect, useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView, Image, ActivityIndicator, SafeAreaView } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SelectList } from 'react-native-dropdown-select-list';
import { TabRouter } from '@react-navigation/native';
import { GlobalStyles } from '../shared/GlobalStyles';
import Post from '../shared/Post';
import SubDetailsScreen from './SubDetails';
import { getLocalData } from '../shared/LocalStorage';
import { URL } from '../shared/URL';

export default function DetailsScreen({ route, navigation }) {

  const [username, setUsername] = useState();
  const [prof, setProf] = useState([]);
  const [rating, setRating] = useState([]);
  const [post, setPost] = useState([]);
  const [comments, setComment] = useState([]);
  const [inputValue, setInputValue] = useState('');

  //finds the averages
  

  // finds the averages of the rating
  const [stars, setStars] = useState([]);
  const [hw, setHW] = useState([]);
  const [dif, setDif] = useState([]);
  const [book, setBook] = useState([]);

  const [selected, setSelected] = useState([]);
  const options = [{ key: '1', value: 'Comments' }, { key: '2', value: 'Questions' }, { key: '3', value: 'All' },];

  const getProf = async () => {
    try {
      const response = await fetch(URL + '/prof/' + route.params.shortname )
      const json = await response.json();
      setProf(json);
    } catch (error) {
      console.error(error);
    }
  }

  const getRating = async () => {
    try {
      const response = await fetch(URL + '/rating/' + route.params.shortname)
      const json = await response.json();
      setRating(json);
    } catch (error) {
      console.error(error);
    }
  }

  const getPost = async () => {
    try {
      const response = await fetch(URL + '/post/' + route.params.shortname)
      const json = await response.json();
      setPost(json);
    } catch (error) {
      console.error(error);
    }
  }

  const getStars = (type) => {
    var sum = 0;
    for (var i = 0; i < rating.length; i++) {
      sum += rating[i].stars;
    }
    sum = sum / rating.length;
    sum = Math.round(sum * 100) / 100;

    return(

      sum
    )
  }

  const getHW = () => {
    var sum = 0;
    for (var i = 0; i < rating.length; i++) {
      sum += rating[i].hw;
    }
    sum = sum / rating.length;
    sum = Math.round(sum * 100) / 100;

    return(sum)



  }

  const getDif = () => {
    var sum = 0;
    for (var i = 0; i < rating.length; i++) {
      sum += rating[i].dif;
    }
    sum = sum / rating.length;
    sum = Math.round(sum * 100) / 100;



    return (sum)

  }

  //need to do somthing differnet 
  const getBook = () => {
    var sum = 0;
    for (var i = 0; i < rating.length; i++) {
      sum += rating[i].book;
    }
    sum = sum / rating.length;
    sum = Math.round(sum * 100) / 100;

    return (sum)

  }

  useEffect(() => {
    getLocalData('username').then((data) => { setUsername(data.toLocaleLowerCase()) });
    getProf();
    getRating();
    getPost();
    getStars();

  
  }, []);

  function Sendpost () {
    if (inputValue === ''){return}
    
    let Posts = {ID: post.length+49, classID : route.params.id, userID: username, text : inputValue }
    console.log(Posts)
    fetch(URL + '/createposts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Posts)
    })
    setInputValue('');
    getPost();
}




  // if the class has more than prof to teach

  if (prof.length > 1) {
    return (
      <KeyboardAwareScrollView style={GlobalStyles.background3} >
        <Text style={GlobalStyles.titleBig}> {route.params.shortname + ': ' + route.params.longname} </Text>

        {/* create sub details screen and use the professors' name as the button. */}
        <View style={GlobalStyles.titleSmall}>
          {prof.map((prof) => {
            return (
              <View key={prof.name} >
                <TouchableOpacity onPress={() => navigation.navigate('SubDetails', { sName: route.params.shortname, lName: route.params.longname, pName: prof.name })}>
                  <Text style={GlobalStyles.titleSmall}>{'Professor: ' + prof.name}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>

        <Text style={GlobalStyles.textDivider} ></Text>

        {/* create the basic info section. */}
        <View style={GlobalStyles.titleSmall}>

         
           


          <View key={rating} style={GlobalStyles.background2}>
            <Text style={GlobalStyles.textSmall3}> {'General Rating: ' + getStars() + ' / 5'} </Text>
            <Text style={GlobalStyles.textSmall3}> {'Difficulty: ' + getDif() + ' / 5'} </Text>
            <Text style={GlobalStyles.textSmall3}> {'Homework frequency: ' + 'Approximately ' + getHW() + ' hours per week'} </Text>
            {/* <Text style={GlobalStyles.textSmall3}> {'Textbook requirement: ' + rating.book} </Text> */}
          </View>


        </View>

        <Text style={GlobalStyles.textDivider} ></Text>

        {/* create the rating button. */}
        <Button color={'#0909FF'} title="Rate Class" onPress={() => (navigation.navigate('Rate', { sName: route.params.shortname, lName: route.params.longname, pName: { prof } }))} />
        <Text style={GlobalStyles.textDivider} ></Text>

        <Text style={GlobalStyles.titleSmall}> {'Showing all posts:'} </Text>

        {/* create the filter. */}
        <SelectList
          setSelected={(val) => setSelected(val)}
          data={options}
          save="value"
        />




        {/* show all the posts. */}

        <View style={GlobalStyles.titleSmall}>
          {post.map((post) => {
            return (
              <View key={post.id} style={GlobalStyles.background2}>
                <TouchableOpacity onPress={() => navigation.navigate("Post", post)}>
                  <Text key={post.id} style={GlobalStyles.textSmall}> {post.username + ":"} {post.text} </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>

        <View style={GlobalStyles.titleSmall}>
          {comments.map((item) => {
            return (
              <View key={item.post} style={GlobalStyles.background2}>
                <Text style={GlobalStyles.textSmall}> {item.user1 + ":"} {item.post} </Text>
              </View>
            );
          })}
        </View>

        {/* create the reply input box. */}
        <TextInput style={GlobalStyles.post_detail} placeholder="post a comment" onSubmitEditing={(event) => { setComment([...comments, { user1: username, post: event.nativeEvent.text }]) }} >{ }</TextInput>

      </KeyboardAwareScrollView>
    );
  }

  // if the class has only 1 professor to teach
  return (
    <KeyboardAwareScrollView style={GlobalStyles.background3} >
      <Text style={GlobalStyles.titleBig}> {route.params.shortname + ': ' + route.params.longname} </Text>

      {/* show the professor who teaches the class. */}
      <View style={GlobalStyles.titleSmall}>
        {prof.map((prof) => {
          return (
            <View key={prof.name} >
              <Text style={GlobalStyles.titleSmall}>{'Professor: ' + prof.name}</Text>
            </View>
          );
        })}
      </View>
      <Text style={GlobalStyles.textDivider} ></Text>

      {/* create the basic info section. */}
      <View style={GlobalStyles.titleSmall}>


        <View key={rating} style={GlobalStyles.background2}>
          <Text style={GlobalStyles.textSmall3}> {'General Rating: ' + getStars() + ' / 5'} </Text>
          <Text style={GlobalStyles.textSmall3}> {'Difficulty: ' + getDif() + ' / 5'} </Text>
          <Text style={GlobalStyles.textSmall3}> {'Homework frequency: ' + 'Approximately ' + getHW() + ' hours per week'} </Text>
          {/* <Text style={GlobalStyles.textSmall3}> {'Textbook requirement: ' + rating.book} </Text> */}
        </View>

      </View>

      <Text style={GlobalStyles.textDivider} ></Text>

      {/* create the rating button. */}
      <Button color={'#0909FF'} title="Rate Class" onPress={() => (navigation.navigate('Rate', { sName: route.params.shortname, lName: route.params.longname, pName: { prof } }))} />
      <Text style={GlobalStyles.textDivider} ></Text>

      <Text style={GlobalStyles.titleSmall}> {'Showing all posts:'} </Text>

      {/* create the filter. */}
      <SelectList
        setSelected={(val) => setSelected(val)}
        data={options}
        save="value"
      />



      {/* show all posts. */}

      <View style={GlobalStyles.titleSmall}>
        {post.map((post) => {
          return (
            <View key={post.id} style={GlobalStyles.background2}>
              <TouchableOpacity onPress={() => navigation.navigate("Post", post)}>
                <Text key={post.id} style={GlobalStyles.textSmall}> {post.username + ":"} {post.text} </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>

      <View style={GlobalStyles.titleSmall}>
        {comments.map((item) => {
          return (
            <View key={item.post} style={GlobalStyles.background2}>
              <Text style={GlobalStyles.textSmall}> {item.user1 + ":"} {item.post} </Text>
            </View>
          );
        })}
      </View>


      <TextInput style={GlobalStyles.post_detail} placeholder="post a comment" onSubmitEditing={(event) => { setComment([...comments, { user1: username, post: inputValue }]) , Sendpost ()}} onChangeText={setInputValue} >{ }</TextInput>


    </KeyboardAwareScrollView>
  );
}