import { React, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import Post from '../shared/Post';

export default function HomeScreen ({ navigation }){

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getClasses = async () => {
      try {
      const response = await fetch('https://fast-woodland-72631.herokuapp.com/classes')
      const json = await response.json();
      setData(json);
      } catch (error) {
      console.error(error);
      } finally {
      setLoading(false);
      }
  }

  useEffect(() => {
      getClasses();
    }, []);

    return (
      <View style={{ flex: 1, padding: 20}}>
          {isLoading ? <ActivityIndicator/> : (
              <FlatList data={data} keyExtractor={({id}, index) => id} renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
                    <Post text = {item.shortname + ': ' + item.longname}></Post>
                  </TouchableOpacity>
              )}/>
          )}
      </View>
    );
}