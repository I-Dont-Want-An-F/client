 // this is the page that shows the search bar & created by Dylan
// based off this tutorial by Kevin Thomas 
// https://blog.logrocket.com/create-react-native-search-bar-from-scratch/

// TO-Do 
//Fix the keyboard as it keeps dropping down 
//Change the style to make it look beter 
//unquie child, caused by both detail screen using same ID??

import { React, useState, useEffect } from "react";
import { StyleSheet, Text, FlatList, View, TouchableOpacity, SafeAreaView, TextInput,Keyboard} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { GlobalStyles } from '../shared/GlobalStyles';


export default function SearchScreen({ navigation }) {

  
  //filters the list of classes and creates a flatlist 
  const List = ({ searchPhrase, data }) => {
    const renderItem = ({ item }) => {
      // when no input, show all
      if (searchPhrase === "") {
        return (<View style={GlobalStyles.background2}>
          <TouchableOpacity onPress={() => navigation.navigate("Details", item)}>
            <Text style={GlobalStyles.textSmall}> {item.shortname}: {item.longname}</Text>
          </TouchableOpacity>
        </View>
        )
      }
      // filter by the shortname
      if (item.shortname.toUpperCase().includes(searchPhrase.toUpperCase())) {
        return (<View style={GlobalStyles.background2}>
          <TouchableOpacity onPress={() => navigation.navigate("Details", item)}>
            <Text style={GlobalStyles.textSmall}> {item.shortname}: {item.longname}</Text>
          </TouchableOpacity>
        </View>
        )
      }
      // filter by the subject 
      if (item.subject.toUpperCase().includes(searchPhrase.toUpperCase())) {
        return (<View style={GlobalStyles.background2}>
          <TouchableOpacity onPress={() => navigation.navigate("Details", item)}>
            <Text style={GlobalStyles.textSmall}>{item.shortname}: {item.longname}</Text>
          </TouchableOpacity>
        </View>
        )
      }
    }
    return (
      <SafeAreaView style={GlobalStyles.list}>
        <View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </SafeAreaView>
    );
  };



//creates the searchscreen and calls the funtcions above
  const [searchPhrase, setSearchPhrase] = useState('');
  const [fakeData, setFakeData] = useState();

  // get data from the fake api endpoint
  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetch(
        "https://shrouded-lowlands-27855.herokuapp.com/classes"
      );
      const data = await apiResponse.json();
      setFakeData(data);
    };
    getData();
  }, []);

  return (
    <SafeAreaView style={GlobalStyles.root}>
      <Text style={GlobalStyles.titleBig}>Classes</Text>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
      />
      <List
        searchPhrase={searchPhrase}
        data={fakeData}
      />
    </SafeAreaView>
  );
};

  //creates a search bar 
  const SearchBar = ({ searchPhrase, setSearchPhrase }) => {
    return (
      <View style={GlobalStyles.container2}>
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={GlobalStyles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
        />
      </View>
    );
  };