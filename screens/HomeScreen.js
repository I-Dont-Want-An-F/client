import { React, useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import Post from '../shared/Post';

export default function HomeScreen ({ navigation }){

  const classList = [

    {number: "CS 104", name: "Applied Computing", key: 0,
    prof: "Derek Schuurman",
    rating: "3.0", hw: "daily", dif:"2.5", book: "No info",
    user1: "freshman 26':",
    user2: "I'm a senior:",
    user3: "freshman 26':",
    post1: "When is this class typically offered?",
    post2: "Probably not this semester.",
    post3: "Oh no, I need to take it this year!",
    post4: "This class too easy"
  },

    {number: "CS 108", name: "Intro to Computing", key: 1,
    prof: "Keith VanderLinden",
    prof2: "Derek Schuurman",
    rating: "4.8", hw: "weekly", dif: "3.0", book: "Online resource",
    user1: "python_new:",
    user2: "python_easy:",
    user3: "python_so_hard:",
    post1: "Help! I deleted my Thonny!",
    post2: "Try to find the install link on Moodle.",
    post3: " I genuinely can't understand how turtle works.",
    post4: "I really like the proffesor"
  },

    {number: "Math 171", name: "Calculus I", key: 2,
    prof: "Chris Moseley",
    rating: "4.5", hw: "weekly", dif:"2.8", book:"Not required",
    user1: "freshman 26':",
    user2: "sophomore 25':",
    user3: "junior 24':",
    post1: "freshman 26': How could the dif only be 2.8? It's so hard!",
    post2: "Try go to help session on Wednesday night.",
    post3: "Or contact a tutor if you need further help.",
    post4: "How do you study for a math final"
  },

    {number:"CS 112", name: "Intro to Data Structures", key: 3,
    prof: "Victor Norman",
    rating: "4.5", hw: "weekly", dif:"2.9", book: "Not required, but recommended",
    user1: "user123:",
    user2: "user456:",
    user3: "user123:",
    post1: "Any tips for studying for next test?",
    post2: "Want to come and study with us together?",
    post3: "Of course! Where are your guys?",
    post4: "The first lab was hard"
  },

    {number: "CS 262", name: "Software Engineering", key: 4,
    prof: "Keith VanderLinden",
    rating: "4.8", hw: "weekly", dif: "3.2", book: "Not required",
    user1: "developer_a:",
    user2: "developer_b:",
    user3: "developer_c:",
    post1: "I love learning JavaScript!",
    post2: "Are your guys ready for the presentation?",
    post3: "SC303 is a big room! I'm so nervous.",
    post4: "I heard the proffesor was mean. Is this true?"
  },

    {number: "ENGR 220", name: "Intro to Computer Architecture", key: 5,
    prof: "Mark Michmerhuizen",
    rating: "2.1", hw: "never", dif:"4.3", book:"No info",
    user1: "user123:",
    user2: "user789:",
    user3: "user456:",
    post1: "When is the next lab help session?",
    post2: "I believe they move it to Wednesday this week.",
    post3: "Oh no, I'm on my way already!",
    post4: "Why do cs majors have to take this"
  },

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