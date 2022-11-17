import React, { useEffect, useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { GlobalStyles } from '../shared/GlobalStyles';
import { URL } from '../shared/URL';

export default function SubDetailsScreen({ route, navigation }) {

  const [rating, setRating] = useState([]);
  const [post, setPost] = useState([]);
  const [comments, setComment] = useState([]);

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
    getRating();
    getPost();
  }, []);

  return (
    <KeyboardAvoidingView style={{ flex: 1, padding: 20 }}>
      <Text style={GlobalStyles.titleBig}> {route.params.shortname + ': ' + route.params.longname} </Text>

      <View style={GlobalStyles.titleSmall}>
        <Text style={GlobalStyles.titleSmall}>{'Professor: ' + route.params.longname}</Text>
      </View>

      <View style={GlobalStyles.titleSmall}>
        {rating.map((rating) => {
          return (
            <View style={GlobalStyles.background}>
              <Text style={GlobalStyles.textSmall}> {'General rating: ' + rating.stars} </Text>
              <Text style={GlobalStyles.textSmall}> {'Homework frequency: ' + rating.hw} </Text>
              <Text style={GlobalStyles.textSmall}> {'Difficulty: ' + rating.dif} </Text>
              <Text style={GlobalStyles.textSmall}> {'Book requirement: ' + rating.book} </Text>
            </View>
          );
        })}
      </View>

      <View style={Styles.container}>
        <Button color={'#880808'} title="Rating" onPress={() => (navigation.navigate('Rate'))} />
        <View style={Styles.space2} />
        <Button color={'#880808'} title="Comments" />
        <View style={Styles.space2} />
        <Button color={'#880808'} title="Questions" />
        <View style={Styles.space2} />
        <Button color={'#880808'} title="All" />
      </View>

      <Text style={GlobalStyles.titleSmall}> {'Showing all posts:'} </Text>

      <FlatList data={post} renderItem={({ item }) => (
        <View style={GlobalStyles.background2}>
          <TouchableOpacity onPress={() => navigation.navigate("Post", item)}>
            <Text style={GlobalStyles.textSmall}> {item.username + ":"} {item.id} {item.text}</Text>
          </TouchableOpacity>
        </View>
      )} />

      <TextInput style={Styles.post} placeholder="post a comment" onSubmitEditing={(event) => { setComment([...comments, { user1: "etl3:", post: event.nativeEvent.text }]) }} >{ }</TextInput>
    </KeyboardAvoidingView>
  );
}

export const Styles = StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
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
});