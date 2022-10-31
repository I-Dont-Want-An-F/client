import { React, useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import Post from '../shared/Post';

export default function HomeScreen ({ navigation }){

  const classList = [
    {number: "CS 262", name: "Software Engineering", key: 0,
    prof: "Keith VanderLinden",
    rating: "4.8", hw: "weekly", dif: "3.2", book: "Not required",
    post1: 'user123: I love learning JavaScript!'},
    {number:"CS 112", name: "Intro to Data Structures", key: 1,
    prof: "Victor Norman",
    rating: "4.5", hw: "weekly", dif:"2.9", book: "Not required, but recommended",
    post1: 'user456: Any tips for studying for next test?'},
    {number: "ENGR 220", name: "Intro to Computer Architecture", key: 2,
    prof: "Mark Michmerhuizen",
    rating: "2.1", hw: "never", dif:"4.3", book:"No info",
    post1: 'user789: When is the next lab help session?'},
    {number: "CS 102", name: "Software Engineering", key: 3,
    prof: "Keith VanderLinden",
    rating: "4.8", hw: "weekly", dif: "3.2", book: "Not required",
    post1: 'user123: I love learning JavaScript!'},
    {number:"ENGR 101", name: "Intro to Data Structures", key: 4,
    prof: "Victor Norman",
    rating: "4.5", hw: "weekly", dif:"2.9", book: "Not required, but recommended",
    post1: 'user456: Any tips for studying for next test?'},
    {number: "Math 271", name: "Intro to Computer Architecture", key: 5,
    prof: "Mark Michmerhuizen",
    rating: "2.1", hw: "never", dif:"4.3", book:"No info",
    post1: 'user789: When is the next lab help session?'}
    
];

    return (
        <View>
          <FlatList data={classList} renderItem={({ item })=> (  
             <TouchableOpacity onPress= {() => navigation.navigate("Details", item)}> 
                <Post title = {item.number}
                text = {item.name + '\n' + "Instructor: " + item.prof} ></Post>
              </TouchableOpacity>                                           
         )} />   
        </View>
    )
}