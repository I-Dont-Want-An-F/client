import {React,  useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { GlobalStyles } from '../stlyes/Global';

export default function Search ({ navigation }) {
    const [text, setText] = useState();
    return (
        <View style={{display:"flex", flexDirection:"row"}}>
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
        </View>
    )
}