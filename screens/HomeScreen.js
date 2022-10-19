import { React } from 'react';
import { View } from 'react-native';
import Post from '../shared/Post';



export default function HomeScreen ({ navigation }){

    return (
        <View>
            <Post title="Example Post" text="This is an example post being rendered in a post container"/>
            <Post title="Example Post" text="This is an example post being rendered in a post container"/>
            <Post title="Example Post" text="This is an example post being rendered in a post container"/>

        </View>
    );
}