import { StyleSheet } from 'react-native';

export const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    titleBig: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#880808',
       

    },
    titleSmall: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#D22B2B',

    },
    textBig:{
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#880808',
    },
    textMed:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#D22B2B',
        backgroundColor: 'white',
        borderRadius: 20,
        margin: 10,
    },
    textMed2:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#880808',
    },
    textSmall:{
        fontSize: 15,
        fontWeight: 'bold',
        textAlign:"left",
        marginTop: 5,
        marginBottom: 5,
        fontSize: 15,
        color: '#880808',
        margin: 10,
    },
    textSmall2:{ //same as small but with the bright red
        fontSize: 15,
        fontWeight: 'bold',
        textAlign:"left",
        marginTop: 5,
        marginBottom: 5,
        fontSize: 15,
        color: '#D22B2B',
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
        backgroundColor: '#D0D0D0',
        borderRadius: 20,
        margin: 10,
    },
    background2: {
        backgroundColor: '#D0D0D0',
        borderRadius: 15,
        margin: 5,
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
});