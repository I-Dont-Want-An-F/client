import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { GlobalStyles } from '../shared/GlobalStyles';
import { URL } from '../shared/URL';

export default function ProfileScreen({ navigation }) {

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

  return (
    <View>
      <Image source={require('../assets/Profile_Pic.webp')} style={GlobalStyles.UserPic}/>
      <Text style={GlobalStyles.titleBig}> John Doe</Text>
      <Text style={GlobalStyles.titleSmall}>   JD12@calvin.edu</Text>

      <View style={GlobalStyles.background}>
        <Text style={GlobalStyles.textBig}> Classes currently taking</Text>
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
    </View>
  )
}