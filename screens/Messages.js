//Created By Eli Lewis
import { React, useState, useEffect } from 'react';
import { StyleSheet, Button, KeyboardAvoidingView, View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {GlobalStyles} from '../shared/GlobalStyles';
import { getLocalData, storeLocalData } from '../shared/LocalStorage';
import { URL } from '../shared/URL';

export default function MessageScreen ({ route, navigation }) {
    const [username, setUsername] = useState('');
    const [messages, setMessages] = useState([]);
    const [messageID, setMessageID] = useState('');
    const [inputValue, setInputValue] = useState('');

    // Component to render a single message
    function Message (props) {
        let side = (props.username == username ? 'flex-end' : 'flex-start' );
        return (
            <KeyboardAvoidingView>
                <View style={{alignSelf: side}}>
                    <View style={MessageStyles.container} >
                        <Text>{props.content}</Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }

    // Fetch messages from the database
    const getMessages = async () => {
        try {
            const response = await fetch(URL + '/messages/' + roomid );
            const json = await response.json();
            setMessages(json);
        } catch (error) {
            console.error(error);
        }
    }

    // Post new message to the database
    function onSend () {
        if (inputValue === ''){return}
        
        let message = {ID: messages.length+1, roomID: roomid, text: inputValue, sender: username.toLocaleLowerCase() }
        fetch(URL + '/sendmessage', {
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

    // get username from local storage if it is not yet set
    if (username == '') {
        getLocalData('username').then((data) => {setUsername(data.toLocaleLowerCase())});        
    }

    // Loads all new messages everytime there is a screen update
    useEffect(() => {
        getMessages();
      }, []);


    // render component for messages
    return (
        <KeyboardAvoidingView style={{width: '100%', height: '100%'}}>
            <View style={{maxHeight: '90%', padding: 15}}>
                <FlatList inverted data={[...messages].reverse()} renderItem={({ item })=> (<Message content = {item.text} username = {item.username} time = {item.posttime}> </Message>)}/>
            </View>
            <TextInput onSubmitEditing={onSend} value={inputValue}  onChangeText={setInputValue}
             style={{height: 40, width: '95%', flex: 1, padding: 10, marginBottom: 20, marginTop: 20, position: 'absolute',
             bottom: 10, left: '2.5%', borderRadius: 10, backgroundColor: 'white'}} />
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

