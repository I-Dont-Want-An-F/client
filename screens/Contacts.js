import { React, useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';
import {GlobalStyles} from '../shared/GlobalStyles';
import { getLocalData, storeLocalData } from '../shared/LocalStorage';

export default function ContactsScreen({navigation}){
    const [contacts, setContacts] = useState();
    const [username, setUsername] = useState();

    const getContacts = async () => {
        if (username === undefined){return;}
        try {
            const response = await fetch('https://fast-woodland-72631.herokuapp.com/messagerooms/' + username);
            const json = await response.json();
            let c = [];
            for(let i = 0; i < json.length; i++){
                c.push([json[i]["id"], json[i]["userone"], json[i]["usertwo"]]);
            }
            console.log(c);
            setContacts(c);
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getLocalData('username').then((data) => {setUsername(data.toLocaleLowerCase())});
    }, []);

    useEffect(() => {
        getContacts();
    }, [username]);

    if (username === undefined){return (
    <View>
        <Text>You Need To Be Signed In To Message!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Sign In')}>
            <Text>Sign In</Text>
        </TouchableOpacity>
    </View>)}

    return (
        <View style={{ flex: 1, padding: 20}}>
            <FlatList data={contacts} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('Messages', item)}>
                    <Text>{item[0]}</Text>
                </TouchableOpacity>
            )}/>
      </View>
    )
}