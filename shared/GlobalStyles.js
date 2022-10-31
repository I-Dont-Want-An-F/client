import { StyleSheet } from 'react-native';

export const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#0047AB',

    },
    email: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#0047AB',

    },
    text:{
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#6495ED',
    },
    text2:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#7393B3',
    },
    UserPic: {
        marginTop: 10,
        borderRadius: 50,
        width: 100, 
        height: 100,
        alignSelf: 'center',
    }
});