import {React,  useState } from 'react';
import {Button, TextInput, Text,View,  } from 'react-native';
import { GlobalStyles } from '../stlyes/Global';

const NewPage = (text)=> {
//< ) => navigation.navigate('Details', item)}></TouchableOpacity>

}





export default function HomeScreen({ navigation }) {
    const [text, setText] = useState('');
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={GlobalStyles.text2}
          placeholder="Type here to search for a class!"
          //onSubmitEditing={()=> navigation.navigate(text)}
          //onSubmitEditing={newText=> setText(newText)}    // this doesnt 
          onChangeText={ newText=> setText(newText) }   // this works with test 2
          defaultValue={text}
        />
          <Button
            color="gray"
            title="search"
            onPress= {()=> navigation.navigate(text)}
            />


         {/* <Button title='test' onPress={()=> navigation.navigate('Cs262')} />              tests ran to figure things out
         <Button color= "red" title='test2' onPress={()=> navigation.navigate(text)} />
         <Text> {text}  </Text>  */}
        </View>
         
    ) 
}