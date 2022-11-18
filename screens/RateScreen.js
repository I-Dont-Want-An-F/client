import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView, Image, ActivityIndicator, SafeAreaView, SnapshotViewIOS } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { GlobalStyles } from '../shared/GlobalStyles';
import { styles } from './DetailScreen';
import Popup from '../components/Popup';

export default function RateScreen({ route, navigation }) {

  const [defaultRating, setDefaultRating] = useState(2);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);
  const { sName, lName } = route.params;

  const starImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png';
  const starImgCorner = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png';

  const CustomRatingBar = () => {
    return (
      <View style={styles.CustomRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity activeOpacity={0.7} key={item} onPress={() => setDefaultRating(item)}>
              <Image style={styles.starImgStyle} source={item <= defaultRating ? { uri: starImgFilled } : { uri: starImgCorner }} />
            </TouchableOpacity>
          )
        })
        }
      </View>
    )
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={GlobalStyles.background3}>
        <Text style={GlobalStyles.titleBig}>  Rate this class! </Text>
        <Text style={GlobalStyles.titleSmall}>  {sName}: {lName} </Text>
        <Text style={GlobalStyles.titleSmall}>  </Text>
        <Text style={GlobalStyles.textSmall}> General Rating </Text>
        <CustomRatingBar />
        <Text style={GlobalStyles.textSmall}> Level of Difficulity </Text>
        <CustomRatingBar />
        <Text style={GlobalStyles.textSmall}> Homework </Text>
        <TextInput style={GlobalStyles.textIn2}> Enter hours per week</TextInput>
        <Text style={GlobalStyles.textSmall}> Book requirement</Text>
        <Button style={GlobalStyles.buttonRequire} color='#646D7E' title='Required' />
        <Button style={GlobalStyles.buttonRequire} color='#BCC6CC' title='Not Required' />
        <Text style={GlobalStyles.textSmall}>  </Text>

        <Button
          style={GlobalStyles.button}
          color='#880808'
          title="Submit Ratings"
        />
        <Popup trigger={false}>
          <h3> Your ratings are submitted! Thank you</h3>
        </Popup>
      </View>
    </View>
  )
};