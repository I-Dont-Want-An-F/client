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
    }
});