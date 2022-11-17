// this is the page that shows the search bar & created by Dylan
// based off a tutorial by Kevin Thomas 
// https://blog.logrocket.com/create-react-native-search-bar-from-scratch/

// TO-Do 
//Fix the keyboard as it keeps dropping down 
//Fix the search as it does not like numbers 
//Change the style to make it look beter 

import { React, useState, useEffect } from "react";
import { StyleSheet, Text, FlatList, View, TouchableOpacity, SafeAreaView, TextInput,Keyboard} from "react-native";
//import List from "./SearchData";
import { Feather, Entypo } from "@expo/vector-icons";
import { GlobalStyles } from '../shared/GlobalStyles';
//import SearchBar from "./SearchBar";

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
      if (item.shortname.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
        return (<View style={GlobalStyles.background2}>
          <TouchableOpacity onPress={() => navigation.navigate("Details", item)}>
            <Text style={GlobalStyles.textSmall}> {item.shortname}: {item.longname}</Text>
          </TouchableOpacity>
        </View>
        )
      }
      // filter by the subject 
      if (item.subject.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
        return (<View style={GlobalStyles.background2}>
          <TouchableOpacity onPress={() => navigation.navigate("Details", item)}>
            <Text style={GlobalStyles.textSmall}>{item.shortname}: {item.longname}</Text>
          </TouchableOpacity>
        </View>
        )
      }
    }
    return (
      <SafeAreaView style={GlobalStyles.container2}>
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
          style={GlobalStyles.textSmall}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
        />
      </View>
    );
  };

//creates the searchscreen and calls the funtcions above
  const [searchPhrase, setSearchPhrase] = useState("");
  const [fakeData, setFakeData] = useState();

  // get data from the fake api endpoint
  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetch(
        "https://fast-woodland-72631.herokuapp.com/classes"
      );
      const data = await apiResponse.json();
      setFakeData(data);
    };
    getData();
  }, []);

  return (
    <SafeAreaView //style={styles.root}>
    >
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


