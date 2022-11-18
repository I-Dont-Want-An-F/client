import { React, useEffect, useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { GlobalStyles } from '../shared/GlobalStyles';
import { URL } from '../shared/URL';

export default function PostScreen({ route, navigation }) {

  const [reply, setReply] = useState([])

  const getReply = async () => {
    try {
      const response = await fetch(URL + '/reply/' + route.params.id)
      const json = await response.json();
      setReply(json);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getReply();
  }, []);

  return (
    <View style={GlobalStyles.background2}>
      <Text>  </Text>
      <Text style={GlobalStyles.textSmall} > {route.params.username + ":"} {route.params.text} </Text>
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
      <TextInput style={GlobalStyles.textIn} placeholder="post a reply">{ }</TextInput>
      <Text>  </Text>
    </View>
  );
}