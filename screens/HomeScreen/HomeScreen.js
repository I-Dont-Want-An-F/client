import {React,  useState } from 'react';
import { Text,TextInput,View } from 'react-native';
import { GlobalStyles } from '../../stlyes/Global';


//add some text before to make it look like a conversaion 


export default function HomeScreen({ navigation }) {
    const [text1, setText1] = useState();
    const [text2, setText2] = useState("you (es91): More functional than this is.");
    const [text3, setText3] = useState();

    return (
        <View> 
        <Text style={GlobalStyles.text} > I Dont  Want An F {"\n"}</Text>
        <Text style={GlobalStyles.post}> Recent question in Cs112: {"\n"}
        User123: Is it important to show up to lab? {"\n"}
        {text1}
        </Text>
        <TextInput style={GlobalStyles.input} onChangeText={(x) => {setText1("you (es91): " + x)}} placeholder= "Respond" />
       <Text> </Text>   
        <Text style={GlobalStyles.post}> Recent question in Cs262: {"\n"}
        User125: How functional does the second prototype have to be? {"\n"}
        {text2}
        </Text>
        <TextInput style={GlobalStyles.input}  onChangeText={(x) => {setText2("you (es91): " + x)}} placeholder= "Respond" />
        <Text> </Text>   
        <Text style={GlobalStyles.post}>  Recent discussion in Cs262: {"\n"}
         Is Cs262 revelant to the real world {"\n"}
         User123: I found this class to be very helpful and it helped me get an intership {"\n"}
         User234: I think User123 is lying. I found this class to be usless. {"\n"}
         {text3}
        </Text>
        <TextInput style={GlobalStyles.input}  onChangeText={(x) => {setText3("you (es91): " + x)}} placeholder= "Respond" />
</View>
    )
}