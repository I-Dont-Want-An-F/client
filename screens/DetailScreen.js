import { TabRouter } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView, Image, ActivityIndicator, SafeAreaView } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { GlobalStyles } from '../shared/GlobalStyles';
import Post from '../shared/Post';

export default function DetailsScreen({ route, navigation }) {

  const [prof, setProf] = useState([]);
  const [rating, setRating] = useState([]);
  const [post, setPost] = useState([]);
  const [comments, setComment] = useState([]);

  const [defaultRating, setDefaultRating] = useState(2);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);
  const starImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png';

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
    <ScrollView style={GlobalStyles.background3} >
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

      <Button color={'#0909FF'} title="Rate Class" onPress={() => (navigation.navigate('Rate'))} />
      <Text style={GlobalStyles.textDivider} ></Text>

      <Text style={GlobalStyles.titleSmall}> {'Showing all posts:'} </Text>

      <View style={styles.container}>
        <Text style={GlobalStyles.textSmall4}> Filter by</Text>
        <View style={styles.space2} />
        <Button color={'#757575'} title="Comments" />
        <View style={styles.space2} />
        <Button color={'#757575'} title="Questions" />
        <View style={styles.space2} />
        <Button color={'#757575'} title="All" />
      </View>

      <FlatList data={post} renderItem={({ item }) => (
        <View  style={GlobalStyles.background2}>
          <TouchableOpacity onPress={() => navigation.navigate("Post", item)}>
            <Text key={item.id} style={GlobalStyles.textSmall}> {item.id} {item.text}</Text>
          </TouchableOpacity>
        </View>
      )} />

      <TextInput style={styles.post} placeholder="post a comment" onSubmitEditing={(event) => { setComment([...comments, { user1: "etl3:", post: event.nativeEvent.text }]) }} >{ }</TextInput>
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
  container: {
    //flex: 1,
    width:350,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  post: {
    textAlign: "center",
    alignSelf: "center",
    width: 350,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 15,
    padding: 10,
  },
  box: {
    borderWidth: 1,
    margin: 5,
    padding: 5,
    fontSize: 15
  },
  space2: {
    width: 10,
    height: 20,
  },
  CustomRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 5
  },
  starImgStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  }
});