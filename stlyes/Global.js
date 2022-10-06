
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
      margin: 20,
      fontSize: 20,
    },
    header: {
      color:"red",  //we should choose a color theme for our app
      textAlign:"center",
      fontSize: 30,
      fontWeight: "bold",
      margin: 20,
    },
    list:{
      color:"gray",
      fontSize: 30,
      fontWeight: "bold",
      textAlign:"center",
    },
    input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    },
  });