
import { StyleSheet } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

export const GlobalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color:"blue",  //we should choose a color theme for our app
      textAlign:"center",
      margin:20,
    },
    text2: {
      color:"gray",  //we should choose a color theme for our app
      textAlign:"center",
      height: 20, 
      width: 200,
    },
    header:{
      textAlign:"center",
      color: "blue",
      fontSize: 20,
    },

    
  });