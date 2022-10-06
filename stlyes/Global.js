
import { StyleSheet } from 'react-native';

export const GlobalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color:"Red",  //we should choose a color theme for our app
      textAlign:"center",
      //margin: 20,
      fontSize: 20,
    },
    text2: {
      textAlign:"center",
      //margin: 20,
      fontSize: 15,
    },
    header: {
      color:"red",  //we should choose a color theme for our app
      textAlign:"center",
      fontSize: 30,
      fontWeight: "bold",
      margin: 10,
    },
    list:{
      color:"gray",
      fontSize: 30,
      fontWeight: "bold",
      textAlign:"center",
    },
    input:{
      height: 40,
      margin: 5,
      borderWidth: 1,
      padding: 10,
    },
    box:{
      borderWidth: 1, 
      margin: 5,
      padding: 5,
      fontSize: 15 
       }
  });