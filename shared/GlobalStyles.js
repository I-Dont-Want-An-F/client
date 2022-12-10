import { StyleSheet } from 'react-native';

export const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        width: '100px',
        height: '100px',
        resizeMode: 'contain'
    },
    list: {
        margin: 10,
        height: "85%",
        width: "100%",
      },
    root: {
        justifyContent: "center",
        alignItems: "center",
      },
      input: {
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
      },
    container2: {
        margin: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "90%",
    },
    titleBig: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        marginTop: 5
    },
    titleBigW: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        marginTop: 5
    },
    titleSmall: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34282C',
    },
    titleSmall2: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#3A3B3C',
        marginBottom: 10
    },
    titleSmall3: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#DADBDD',
        marginBottom: 10
    },
    textBig:{
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
    },
    textMed: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        backgroundColor: 'white',
        borderRadius: 20,
        margin: 10,
    },
    textMed2: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#560319',
    },
    textSmall: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: "left",
        marginTop: 5,
        marginBottom: 0,
        fontSize: 15,
        color: '#560319',
        margin: 10,
    },
    textSmall2: { //same as small but with the bright red
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: "left",
        marginTop: 5,
        marginBottom: 5,
        fontSize: 15,
        color: '#D22B2B',
        margin: 10,
    },
    textSmall3:{
        fontSize: 18,
        fontWeight: 'bold',
        textAlign:"left",
        marginTop: 5,
        marginBottom: 0,
        color: 'black',
        margin: 10,
    },
    textSmall4:{
        fontSize: 15,
        fontWeight: 'bold',
        textAlign:"left",
        marginTop: 5,
        marginBottom: 0,
        color: '#560319',
    },
    textDivider: {
        fontSize: 5,
        marginBottom: 2,
        marginTop: 2
    },
    textSmall5:{
        fontSize: 15,
        fontWeight: 'bold',
        textAlign:"left",
        marginTop: 5,
        marginBottom: 0,
        color: 'black',
        margin: 10,
    },
    UserPic: {
        marginTop: 10,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: '#FDDA0D',
        width: 100,
        height: 100,
        alignSelf: 'center',
    },
    background: {
        backgroundColor: '#A9A9A9',
        borderRadius: 15,
        marginBottom: 15
    },
    background2: {
        backgroundColor: '#DADBDD',
        borderRadius: 15,
        margin: 5,
    },
    background3: {
        backgroundColor: 'white',
        borderRadius: 0,
        margin: 5,
    },
    background4: {
        backgroundColor: 'white',
        borderRadius: 0,
        margin: 10,
    },
   textIn:{ //used for text input

        textAlign: "center",
        alignSelf: "center",
        width: 350,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 15,
        padding: 10,
    },
    textIn2: { //used for text input in the rate screen 
        textAlign: "center",
        alignSelf: "center",
        width: 300,
        height: 40,
        color: '#D22B2B',
        borderWidth: 2,
        borderRadius: 10,
        marginTop: 15,
        padding: 10,
   },
   textIn2:{ //used for text input in the rate screen 
    textAlign: "center",
    alignSelf: "center",
    width: 300,
    height: 40,
    color: '#4C4646',
    borderWidth: 2,
    borderRadius: 10, 
    marginTop: 15,
    padding: 10,
    },
   button: {
    backgroundColor: "#880808",
    width: 20,
    padding: 20,
    borderRadius: 5,
   },
   buttonRequire: {
    alignItems: 'left',
    justifyContent: 'left',
    width: 10,
    padding: 0,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5
   },
   container_detail: {
    //flex: 1,
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  post_detail: {
    textAlign: "center",
    alignSelf: "center",
    width: 350,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 15,
    padding: 10,
  },
  box_detail: {
    borderWidth: 1,
    margin: 5,
    padding: 5,
    fontSize: 15
  },
  space2_detail: {
    width: 10,
    height: 20,
  },
  CustomRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 5
  },
  starImgStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  ratePic: {
    width: 350,
    height: 400,
    resizeMode: 'contain',
    marginTop: 0
  }
 
});