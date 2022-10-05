import {React,  useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { GlobalStyles } from '../../stlyes/Global';

//super rough draft

const classList = [{name: "cs 262", key: 0}, {name: "engr 220", key: 1},];
const listItems = classList.map((c) =>
  < ClassContainerElemenet key={c.key} c={c.name} />
);

function ClassContainerElemenet (props) {
  return (
    <Text> {props.c}</Text>
  )
}

export default function ClassScreen() {
    return (
      <View>
        {listItems}
      </View>
    )
}

