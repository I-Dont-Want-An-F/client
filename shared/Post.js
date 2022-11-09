//Universal default post container
import { React } from 'react';
import { View, Text, StyleSheet, Image } from "react-native";

export default function Post (props, { navigation }) {
    /* This function expects Title and Text props to be passed to it
     * 
     *  ** maybe add a type prop as well? ** 
     */
    return (
        <View style={PostContainerStyles.container}>
            {/* <Image source={{uri:'https://calvin.edu/dotAsset/0d95e9c5-c5ef-4870-8caf-c0afbfa40dcd.jpg'}} style={PostContainerStyles.imageWrapper}></Image> */}
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
        imageWrapper: {
            width: 60,
            height: 60,
            borderRadius: 60,
            margin: 10,
        },
        image: {
            width: 30,
            height: 30,
            marginBottom: 10,
        },
        title: {
            justifyContent: 'center',
            textAlign: 'center',
            color: '#880808',
            fontSize: 18,
            marginTop: 10,
        },
        text: {
            textAlign: "center",
            marginBottom: 15,
            margin: 10,
            fontSize: 15,
            color: '#D22B2B',
        }

});