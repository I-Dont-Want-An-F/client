import {React,  useState } from 'react';
import { Text, View, TextInput, Button, } from 'react-native';
import { GlobalStyles } from '../stlyes/Global';


const classList = [
    {name: "Cs 262", rating: "5", comment: "This class is amazing and the proff is the best. Please give us a good grade ", comment2:"I would take agian", key: 0},
    {name: "Engr 220", rating: "2", comment: "engineers smell", comment2: "the labs were so boring", key: 1},
    {name: "Cs 112", rating: "4", comment: "good", comment2: "The first lab was terrible", key: 2}];
    const listItems = classList.map((c) =>
      < ClassContainerElemenet key={c.key} c={c.name} />
    );
    function ClassContainerElemenet (props) {
        return (
          <Text> {props.c}</Text>
        )
      }

export default function Search ({ navigation }) {
    const [text, setText] = useState();
    return(
    <View style={{display:"flex", flexDirection:"row"}}>
    <TextInput
    placeholder="Type here to search for a class!"
    onChangeText={ newText=> setText(newText) }  
    defaultValue={text}
    />
      <Button color="gray"  title="search"
        onPress= { () =>{
            {classList.map(a=>{
                if (text===a.name) {
                    navigation.navigate("Classes", a)
                }
              })}
            navigation.navigate(text) //can probaly throw error
        }}  />
    </View>
    )
    }
                
        
 