/**
 * Universal default post container.
 */

import { React } from 'react';
import { View, Text, StyleSheet, Image } from "react-native";

export default function Post(props, { navigation }) {
    return (
        <View style={PostContainerStyles.container}>
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
    text: {
        justifyContent: 'center',
        textAlign: "center",
        marginTop: 15,
        marginBottom: 15,
        margin: 10,
        fontSize: 15,
        color: '#D22B2B',
    }
});