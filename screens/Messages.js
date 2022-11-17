import { React, useState, useEffect } from 'react';
import { StyleSheet, Button, KeyboardAvoidingView, View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import {GlobalStyles} from '../shared/GlobalStyles';
import { getLocalData, storeLocalData } from '../shared/LocalStorage';

export default function MessageScreen ({ route, navigation }) {
    const [username, setUsername] = useState('');
    const [messages, setMessages] = useState([]);
    const [messageID, setMessageID] = useState('');
    const [inputValue, setInputValue] = useState('');

    function Message (props) {
        let side = (props.sender == route.params[1] ? 'flex-end' : 'flex-start' );
        return (
            <View style={{alignSelf: side}}>
                <View style={MessageStyles.container} >
                      <Text>{props.content}</Text>
                </View>
            </View>
        )
    }

    const getMessages = async () => {
        try {
            const response = await fetch('https://secret-meadow-43481.herokuapp.com/messages/' + route.params[0] );
            const json = await response.json();
            setMessages(json);
        } catch (error) {
            console.error(error);
        }
    }

    function onSend () {
        if (inputValue === ''){return}
        let message = {ID: messages.length+1, roomID: route.params[0], text: inputValue, sender: username.toLocaleLowerCase() }
        fetch('https://secret-meadow-43481.herokuapp.com/sendmessage', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        })
        setInputValue('');
        getMessages();
    }

    if (username == '') {
        getLocalData('username').then((data) => {setUsername(data)});        
    }

    useEffect(() => {
        getMessages();
      }, []);


    return (
        <KeyboardAvoidingView style={{width: '100%', height: '100%'}}>
            <FlatList data={messages} renderItem={({ item })=> (<Message content = {item.text} sender = {item.sender}> </Message>)}/>
            <TextInput onSubmitEditing={onSend} value={inputValue}  onChangeText={setInputValue}
             style={{height: 40, width: '100%', padding: 10, margin: 20,position: 'absolute',
             bottom: 10, borderRadius: 10, backgroundColor: 'white'}} />
        </KeyboardAvoidingView>   
    );
} 



const MessageStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        margin: 10,
    }
});

