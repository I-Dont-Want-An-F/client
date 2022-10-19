//Universal default post container
import { React } from 'react';
import { View, Text, StyleSheet } from "react-native";



export default function Post (props, { navigation }) {
    /* This function expects Title and Text props to be passed to it
     * 
     *  ** maybe add a type prop as well? ** 
     */
    return (
        <View style={PostContainerStyles}>
            <Text>{props.title}</Text>
            <Text>{props.text}</Text>
        </View>
    );
}

const PostContainerStyles = StyleSheet.create({
    backgroundColor: 'white',
    color: 'blue',
    font: 'ariel',
    borderRadius: 10,
});