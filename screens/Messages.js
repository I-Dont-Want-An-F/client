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

    const getMessages = async () => {
        try {
            const response = await fetch('https://fast-woodland-72631.herokuapp.com/messages/' + roomid );
            const json = await response.json();
            setMessages(json);
        } catch (error) {
            console.error(error);
        }
    }

    function onSend () {
        if (inputValue === ''){return}
        let message = {ID: messages.length+1, roomID: roomid, text: inputValue, sender: username.toLocaleLowerCase() }
        fetch('https://fast-woodland-72631.herokuapp.com/sendmessage', {
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
        getLocalData('username').then((data) => {setUsername(data.toLocaleLowerCase())});        
    }

    useEffect(() => {
        getMessages();
      }, []);


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

