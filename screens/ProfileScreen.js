import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { GlobalStyles } from '../shared/GlobalStyles';
import { getLocalData } from '../shared/LocalStorage';
import { URL } from '../shared/URL';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFF00',
  },
});

export default function ProfileScreen({ navigation }) {

  const [username, setUsername] = useState();
  const [classTaking, setTaking] = useState([]);
  const [classTaken, setTaken] = useState([]);

  const getTaking = async () => {
    try {
      const response = await fetch(URL + '/classtake/abc12')
      const json = await response.json();
      setTaking(json);
    } catch (error) {
      console.error(error);
    }
  }

  const getTaken = async () => {
    try {
      const response = await fetch(URL + '/classtook/abc12')
      const json = await response.json();
      setTaken(json);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTaking();
    getTaken();
  }, []);

  if (username == '' || username == null || username === undefined) {
    getLocalData('username').then((data) => { setUsername(data) });
  }

  if (username == '' || username == null || username === undefined) {
    return (
      <View>
        <Text>You Need To Be Signed In To Visit The Profile Screen!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Sign In')}>
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>)
  }

  return (
    <View styles={styles.container} backgroundColor='#800000'>
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
        <Text>{}</Text>
      </View>
    </View>
  )
}