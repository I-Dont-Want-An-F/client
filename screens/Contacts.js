/**
 * Created by Eli. Implement the contact screen.
 */

import { React, useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';
import { GlobalStyles } from '../shared/GlobalStyles';
import { getLocalData, storeLocalData } from '../shared/LocalStorage';
import { URL } from '../shared/URL';

export default function ContactsScreen({ navigation }) {
    const [contacts, setContacts] = useState();
    const [username, setUsername] = useState();

    // get all the contacts.
    const getContacts = async () => {
        if (username === undefined) { return; }
        try {
            const response = await fetch(URL + '/messagerooms/' + username);
            const json = await response.json();
            let c = [];
            for (let i = 0; i < json.length; i++) {
                c.push([json[i]["id"], json[i]["userone"], json[i]["usertwo"]]);
            }
            setContacts(c);
        } catch (error) {
        }
    }

    function Contacts(props) {
        let contactName;
        props.userone == username ? contactName = props.usertwo : contactName = props.userone;
        return (
            <View style={{ backgroundColor: 'white', borderRadius: 15, padding: 10 }}>
                <Text>{contactName}</Text>
            </View>
        )
    }

    useEffect(() => {
        getLocalData('username').then((data) => { setUsername(data.toLocaleLowerCase()) });
    }, []);

    useEffect(() => {
        getContacts();
    }, [username]);

    // if the user didn't log in, ask them to log in
    if (username === undefined) {
        return (
            <View>
                <Text>You Need To Be Signed In To Message!</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Sign In')}>
                    <Text>Sign In</Text>
                </TouchableOpacity>
            </View>)
    }

    // show the list of contacts
    return (
        <View style={{ flex: 1, padding: 20 }}>
            <FlatList data={contacts} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('Messages', roomid = item[0], userone = [1], usertwo = [2])}>
                    <Contacts key={item[0]} userone={item[1]} usertwo={item[2]} />
                </TouchableOpacity>
            )} />
        </View>
    )
}