
/**
 * Created by Sophia. Implements the post screen.
 */


import { React, useEffect, useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { GlobalStyles } from '../shared/GlobalStyles';
import { getLocalData } from '../shared/LocalStorage';
import { URL } from '../shared/URL';

export default function PostScreen({ route, navigation }) {

  const [username, setUsername] = useState();
  const [reply, setReply] = useState([])
  const [comments, setComment] = useState([])
  const [post, setPost] = useState([])
  const [inputValue, setInputValue] = useState('');
  

  // fetch replies of the post from the DB.
  const getReply = async () => {
    try {
      const response = await fetch(URL + '/reply/' + route.params.id)
      const json = await response.json();
      setReply(json);
    } catch (error) {
      console.error(error);
    }
  }

  const getPost = async () => {
    try {
      const response = await fetch(URL + '/post/' + route.params.id)
      const json = await response.json();
      setPost(json);
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
    getLocalData('username').then((data) => { setUsername(data.toLocaleLowerCase()) });
    getReply();
  }, []);


  function Sendreply () {
    if (inputValue === ''){return}
    let replies = { ID: reply.length+40, text : inputValue }
    console.log(replies)
    fetch(URL + '/createreply', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(replies)
    })
    setInputValue('');
    getReply();
}



  return (
    <View style={GlobalStyles.background2}>
      <Text>  </Text>
      {/* show the main post. */}
      <Text style={GlobalStyles.textSmall} > {route.params.username + ":"} {route.params.text} </Text>


      {/* show the replies to the main post. */}

      <View style={GlobalStyles.titleSmall}>
        {reply.map((reply) => {
          return (
            <View key={reply.id}>
              <Text style={GlobalStyles.textSmall}>{'         ' + reply.username}</Text>
              <Text style={GlobalStyles.textSmall2}>{'         ' + reply.text}</Text>
            </View>
          );
        })}
      </View>


      <FlatList data={comments} renderItem={({ item }) => (
        <View>
          <Text style={GlobalStyles.textSmall}>{'         ' + item.user1}</Text>
          <Text style={GlobalStyles.textSmall2}>{'         ' + item.post}</Text>
        </View>
      )} />
        
      <TextInput style={GlobalStyles.textIn} placeholder="post a reply" onSubmitEditing={(event) => { setComment([...comments, { user1: username, post: inputValue}  ]) , Sendreply() }} onChangeText={setInputValue}  >{ }</TextInput>
      

      <View style={GlobalStyles.titleSmall}>
        {comments.map((item) => {
          return (
            <View key={item}>
              <Text style={GlobalStyles.textSmall}>{'         ' + item.user1}</Text>
              <Text style={GlobalStyles.textSmall2}>{'         ' + item.post}</Text>
            </View>
          );
        })}
      </View>

      {/* create the reply input box. */}
      <TextInput style={GlobalStyles.textIn} placeholder="post a reply" onSubmitEditing={(event) => { setComment([...comments, { user1: username, post: event.nativeEvent.text }]) }} >{ }</TextInput>


      <Text>  </Text>
      {/* <TextInput onSubmitEditing={replySend} value={inputValue}  onChangeText={setInputValue} /> */}
    </View>

    
  );
}