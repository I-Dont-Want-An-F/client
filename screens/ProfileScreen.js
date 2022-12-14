/**
 * Created by Eli. Implements the profile screen.
 */

import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';
import { GlobalStyles } from '../shared/GlobalStyles';
import { getLocalData, storeLocalData } from '../shared/LocalStorage';
import { URL } from '../shared/URL';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFF00',
  },
});

export default function ProfileScreen({ navigation }) {

  const [username, setUsername] = useState("");
  const [classTaking, setTaking] = useState([]);
  const [classTaken, setTaken] = useState([]);
  

  // get the user data from the DB.
  const getTaking = async () => {
    try {
      const response = await fetch(URL + '/classtake/' + username)
      const json = await response.json();
      setTaking(json);
    } catch (error) {
      //console.error(error); error handling isnt cool anymore
    }
  }

  const getTaken = async () => {
    try {
      const response = await fetch(URL + '/classtook/' + username)
      const json = await response.json();
      setTaken(json);
    } catch (error) {
      // console.error(error);
    }
  }

  useEffect(() => {
    getLocalData('username').then((data) => { setUsername(data.toLocaleLowerCase()) });
  }, []);

  useEffect(() => {
    getTaking();
    getTaken();
  }, [username]);

  // if user didn't log in, require them to log in
  if (username == '' || username == null || username === undefined) {
    return (
      <View>
        <Button title='help' onPress={() => navigation.navigate('Help')} />
        <Text style={GlobalStyles.textBig}>You Need To Be Signed In To Visit The Profile Screen!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Sign In')}>
          <Text style={GlobalStyles.textSmall2}>Sign In</Text>
        </TouchableOpacity>
      </View>)
  }

  // if the user logged in, show the user profile
  return (
    <View styles={styles.container} backgroundColor='#800000' height='100%'>
      {/* need to change local data  */}
      <View style={GlobalStyles.container_detail}>
        <Button color='gray' title='     logout     ' onPress={() => { setUsername(""); storeLocalData("username", ""); navigation.navigate("Sign In") }} />
        <Button color='gray' title='      Online help     ' onPress={() => navigation.navigate('Help')} />
      </View>
      <Image
        source={require('../assets/Profile_Pic0.webp')}
        style={GlobalStyles.UserPic}
      />
      <Text style={GlobalStyles.titleBigW}> {username} </Text>
      <Text style={GlobalStyles.titleSmall3}>   {username}@calvin.edu </Text>

      <View style={GlobalStyles.background}>
        <Text style={GlobalStyles.textBig}> Classes Currently Taking</Text>
        <FlatList data={classTaking} renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Details", item)}>
            <Text style={GlobalStyles.textMed}> {item.shortname + ": " + item.longname} </Text>
          </TouchableOpacity>
        )} />
      </View>

      <View style={GlobalStyles.background}>
        <Text style={GlobalStyles.textBig}> Completed Classes</Text>
        <FlatList data={classTaken} renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Details", item)}>
            <Text style={GlobalStyles.textMed}> {item.shortname + ": " + item.longname} </Text>
          </TouchableOpacity>
        )} />
      </View>

      <View backgroundColor='#800000'>
        <Text>{ }</Text>
      </View>
    </View>
  )
}
