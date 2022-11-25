import React, { useEffect, useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView, Image, ActivityIndicator, SafeAreaView } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
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

  const [defaultRating, setDefaultRating] = useState(2);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);
  const starImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png';

  const getProf = async () => {
    try {
      const response = await fetch(URL + '/prof/' + route.params.shortname)
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

  useEffect(() => {
    getLocalData('username').then((data) => { setUsername(data.toLocaleLowerCase()) });
    getProf();
    getRating();
    getPost();
  }, []);


  if (prof.length > 1) {
    return (
      <KeyboardAwareScrollView style={GlobalStyles.background3} >
        <Text style={GlobalStyles.titleBig}> {route.params.shortname + ': ' + route.params.longname} </Text>

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

        <View style={GlobalStyles.titleSmall}>
          {rating.map((rating) => {
            return (
              <View key={rating} style={GlobalStyles.background2}>
                <Text style={GlobalStyles.textSmall3}> {'General Rating: ' + rating.stars + ' / 5'} </Text>
                <Text style={GlobalStyles.textSmall3}> {'Difficulty: ' + rating.dif + ' / 5'} </Text>
                <Text style={GlobalStyles.textSmall3}> {'Homework frequency: ' + 'Approximately ' + rating.hw + ' hours per week'} </Text>
                <Text style={GlobalStyles.textSmall3}> {'Textbook requirement: ' + rating.book} </Text>
              </View>
            );
          })}
        </View>

        <Text style={GlobalStyles.textDivider} ></Text>

        <Button color={'#0909FF'} title="Rate Class" onPress={() => (navigation.navigate('Rate', { sName: route.params.shortname, lName: route.params.longname, pName: { prof } }))} />
        <Text style={GlobalStyles.textDivider} ></Text>

        <Text style={GlobalStyles.titleSmall}> {'Showing all posts:'} </Text>

        <View style={GlobalStyles.container_detail}>
          <Text style={GlobalStyles.textSmall4}> Filter by</Text>
          <View style={GlobalStyles.space2_detail} />
          <Button color={'#757575'} title="Comments" />
          <View style={GlobalStyles.space2_detail} />
          <Button color={'#757575'} title="Questions" />
          <View style={GlobalStyles.space2_detail} />
          <Button color={'#757575'} title="All" />
        </View>

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

        <TextInput style={GlobalStyles.post_detail} placeholder="post a comment" onSubmitEditing={(event) => { setComment([...comments, { user1: username, post: event.nativeEvent.text }]) }} >{ }</TextInput>

      </KeyboardAwareScrollView>
    );
  }

  return (
    <KeyboardAwareScrollView style={GlobalStyles.background3} >
      <Text style={GlobalStyles.titleBig}> {route.params.shortname + ': ' + route.params.longname} </Text>

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

      <View style={GlobalStyles.titleSmall}>
        {rating.map((rating) => {
          return (
            <View key={rating} style={GlobalStyles.background2}>
              <Text style={GlobalStyles.textSmall3}> {'General Rating: ' + rating.stars + ' / 5'} </Text>
              <Text style={GlobalStyles.textSmall3}> {'Difficulty: ' + rating.dif + ' / 5'} </Text>
              <Text style={GlobalStyles.textSmall3}> {'Homework frequency: ' + 'Approximately ' + rating.hw + ' hours per week'} </Text>
              <Text style={GlobalStyles.textSmall3}> {'Textbook requirement: ' + rating.book} </Text>
            </View>
          );
        })}
      </View>

      <Text style={GlobalStyles.textDivider} ></Text>

      <Button color={'#0909FF'} title="Rate Class" onPress={() => (navigation.navigate('Rate', { sName: route.params.shortname, lName: route.params.longname, pName: { prof } }))} />
      <Text style={GlobalStyles.textDivider} ></Text>

      <Text style={GlobalStyles.titleSmall}> {'Showing all posts:'} </Text>

      <View style={GlobalStyles.container_detail}>
        <Text style={GlobalStyles.textSmall4}> Filter by</Text>
        <View style={GlobalStyles.space2_detail} />
        <Button color={'#757575'} title="Comments" />
        <View style={GlobalStyles.space2_detail} />
        <Button color={'#757575'} title="Questions" />
        <View style={GlobalStyles.space2_detail} />
        <Button color={'#757575'} title="All" />
      </View>

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

      <TextInput style={GlobalStyles.post_detail} placeholder="post a comment" onSubmitEditing={(event) => { setComment([...comments, { user1: username, post: event.nativeEvent.text }]) }} >{ }</TextInput>
    </KeyboardAwareScrollView>
  );
}