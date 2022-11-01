// user profile 

import { React } from 'react';
import { View, Text, FlatList, TouchableOpacity,Image } from 'react-native';
import {GlobalStyles} from '../shared/GlobalStyles';


export default function ProfileScreen ({ navigation }){
    //classes user is taken 
    const classList = [

      {number:"CS 112", name: "Intro to Data Structures", key: 3,
      prof: "Victor Norman",
      rating: "4.5", hw: "weekly", dif:"2.9", book: "Not required, but recommended",
      post1: "user123: Any tips for studying for next test?",
      post2: "user456: Want to come and study with us together?",
      post3: "user123: Of course! Where are your guys?"},

      {number: "CS 262", name: "Software Engineering", key: 4,
      prof: "Keith VanderLinden",
      rating: "4.8", hw: "weekly", dif: "3.2", book: "Not required",
      post1: "developer_a: I love learning JavaScript!",
      post2: "developer_b: Are your guys ready for the presentation?",
      post3: "developer_c: SC303 is a big room! I'm so nervous."},

      {number: "ENGR 220", name: "Intro to Computer Architecture", key: 5,
      prof: "Mark Michmerhuizen",
      rating: "2.1", hw: "never", dif:"4.3", book:"No info",
      post1: "user123: When is the next lab help session?",
      post2: "user789: I believe they move it to Wednesday this week.",
      post3: "user456: Oh no, I'm on my way already!"},
      
  ];

  const classList2 = [

    {number: "CS 104", name: "Applied Computing", key: 0,
    prof: "Derek Schuurman",
    rating: "3.0", hw: "daily", dif:"2.5", book: "No info",
    post1: "freshman 26': When is this class typically offered?",
    post2: "I'm a senior: Probably not this semester.",
    post3: "freshman 26': Oh no, I need to take it this year!"},

    {number: "CS 108", name: "Intro to Computing", key: 1,
    prof: "Keith VanderLinden",
    rating: "4.8", hw: "weekly", dif: "3.0", book: "Online resource",
    post1: "python_new: Help! I deleted my Thonny!",
    post2: "python_easy: Try to find the install link on Moodle.",
    post3: "python_so_hard: I genuinely can't understand how turtle works."},

    {number: "Math 171", name: "Calculus I", key: 2,
    prof: "Chris Moseley",
    rating: "4.5", hw: "weekly", dif:"2.8", book:"Not required",
    post1: "freshman 26': How could the dif only be 2.8? It's so hard!",
    post2: "sophomore 25': Try go to help session on Wednesday night.",
    post3: "junior 24': Or contact a tutor if you need further help."},

    ];

    const listItems = classList.map((c) =>
    < ClassContainerElemenet key={c.key} c={c.number} />);

    const listItems2 = classList2.map((c) =>
      < ClassContainerElemenet key={c.key} c={c.number} />);

    function ClassContainerElemenet (props) {
        const [text, setText] = useState();
        setText(props.c)
        return (
          <Text> {text} </Text>
        )
      }
    return (
        <View>
        <Image
                    source={require('../assets/Profile_Pic.webp' )}
                    style={GlobalStyles.UserPic}
                    />

        <Text style={GlobalStyles.title}> John Doe</Text>
        <Text style={GlobalStyles.email}>   JD12@calvin.edu</Text>
        <Text style={GlobalStyles.text}> Classes currently taking</Text> 

        <FlatList data={classList} renderItem={({ item })=> (  
             <TouchableOpacity onPress= {() => navigation.navigate("Details", item)}> 
                 <Text style={GlobalStyles.text2}> {item.number} </Text>
              </TouchableOpacity>                                           
         )} />   

        <Text style={GlobalStyles.text}> Completed Classes</Text> 

        <FlatList data={classList2} renderItem={({ item })=> (  
             <TouchableOpacity onPress= {() => navigation.navigate("Details", item)}> 
                 <Text style={GlobalStyles.text2}> {item.number} </Text>
              </TouchableOpacity>  
          )}/>
        </View>
    )
}