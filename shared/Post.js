//Universal default post container
import { React } from 'react';
import { View, Text, StyleSheet } from "react-native";



export default function Post (props, { navigation }) {
    /* This function expects Title and Text props to be passed to it
     * 
     *  ** maybe add a type prop as well? ** 
     */
    return (
        <View style={PostContainerStyles.container}>
            <Text style={PostContainerStyles.title} >{props.title}</Text>
            <Text style={PostContainerStyles.text} >{props.text}</Text>
        </View>
    );
}

const PostContainerStyles = StyleSheet.create({
        container: {
            backgroundColor: 'white',
            color: 'blue',
            borderRadius: 20,
            margin: 10,
        },
        title: {
            justifyContent: 'center',
            textAlign: 'center',
            fontSize: 20,
            marginTop: 10,
            marginBottom: 5,

        },
        text: {
            textAlign: "left",
            marginBottom: 15,
            margin: 10,
            fontSize: 20,
            color: "blue",
        }

});