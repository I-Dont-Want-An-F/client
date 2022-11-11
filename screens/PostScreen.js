//created by dylan, creates a new page off of details that opens up a comment thread
import { React, useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import {GlobalStyles} from '../shared/GlobalStyles';

export default function PostScreen ({ route, navigation }) {
    return (
      <View style={GlobalStyles.background2}>
        <Text>  </Text>
          <Text style={GlobalStyles.textSmall} > {route.params.user1} </Text>
          <Text style={GlobalStyles.textSmall2}> {route.params.post }</Text>
          <Text style={GlobalStyles.textSmall} > {'        '+route.params.user2} </Text>
          <Text style={GlobalStyles.textSmall2}> {'        '+ route.params.reply }</Text>
          <Text style={GlobalStyles.textSmall} > {'        '+route.params.user3} </Text>
          <Text style={GlobalStyles.textSmall2}> {'        '+ route.params.reply2 }</Text>
          <TextInput style={GlobalStyles.textIn}  placeholder = "post a reply">{}</TextInput>
          <Text>  </Text>
      </View>
    );
  }