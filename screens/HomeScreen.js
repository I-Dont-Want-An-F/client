import { React } from 'react';
import { View } from 'react-native';
import Post from '../shared/Post';



export default function HomeScreen ({ navigation }){

    return (
        <View>
            <Post title="title" text="ads"/>
        </View>
    );
}