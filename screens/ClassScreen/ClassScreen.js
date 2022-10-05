import {React,  useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { GlobalStyles } from '../../stlyes/Global';


export default function ClassScreen({ navigation }) {
  const [text, setText] = useState();
  setText("");
    return (
        <View style={{padding: 10}}>
        <TextInput
          style={GlobalStyles.text2}
          placeholder="Type here to search for a class!"
          onChangeText={ newText=> setText(newText) }   // this works with test 2
          defaultValue={text}
        />
          <Button
            color="gray"
            title="search"
            onPress= {()=> navigation.navigate(text)}
            />
        <Text style={GlobalStyles.text} > This is the class screen </Text>

        </View>
         
    )
}