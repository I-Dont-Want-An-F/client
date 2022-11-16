import { React, useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';
import {GlobalStyles} from '../shared/GlobalStyles';
import { getLocalData, storeLocalData } from '../shared/LocalStorage';

export default function ContactsScreen({navigation}){
    const [contacts, setContacts] = useState();
    const [username, setUsername] = useState();

    const getContacts = async () => {
        try {
            const response = await fetch('https://secret-meadow-43481.herokuapp.com/messagerooms/' + username.toLowerCase())
            console.log(response);
            const json = await response.json();
            let c = [];
            for(let i = 0; i < json.length; i++){
                c.push(json[i]["id"]);
            }
            setContacts(c);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getLocalData('username').then((data) => {setUsername(data)});
        getContacts();
      }, []);

    return (
        <View style={{ flex: 1, padding: 20}}>
            <FlatList data={contacts} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('Messages', item)}>
                    <Text>{item}</Text>
                </TouchableOpacity>
            )}/>
      </View>
    )
}