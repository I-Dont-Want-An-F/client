// created by Chang, creates the rate page
import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView, Image, ActivityIndicator, SafeAreaView, SnapshotViewIOS } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInput } from 'react-native-gesture-handler';
import { GlobalStyles } from '../shared/GlobalStyles';

export default function RateScreen({ route, navigation }) {

  const [defaultRating, setDefaultRating] = useState(2);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);
  const { sName, lName } = route.params;

  const [defaultRating2, setDefaultRating2] = useState(2);
  const [maxRating2, setmaxRating2] = useState([1, 2, 3, 4, 5]);

  const starImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png';
  const starImgCorner = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png';

  // Rate general rating of a class
  const CustomRatingBarGR = () => {
    return (
      <View style={GlobalStyles.CustomRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity activeOpacity={0.7} key={item} onPress={() => setDefaultRating(item)}>
              <Image style={GlobalStyles.starImgStyle} source={item <= defaultRating ? { uri: starImgFilled } : { uri: starImgCorner }} />
            </TouchableOpacity>
          )
        })
        }
      </View>
    )
  };

  // Rate level of difficulty of a class
  const CustomRatingBarLoD = () => {
    return (
      <View style={GlobalStyles.CustomRatingBarStyle}>
        {
          maxRating2.map((item, key) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                key={item}
                onPress={() => setDefaultRating2(item)}
              >
                <Image
                  style={GlobalStyles.starImgStyle}
                  source={
                    item <= defaultRating2
                      ? {uri: starImgFilled}
                      : {uri: starImgCorner}
                  }
                />
              </TouchableOpacity>
            )
          })
        }
      </View>
    )
  };

  return(
      
    <KeyboardAwareScrollView style={{ flex: 1}}>
      {/* General info of rating */}
      <View style={GlobalStyles.background3}>
      <Text style={GlobalStyles.titleBig}>  Rate this class! </Text>
      <Text style={GlobalStyles.titleSmall}>  {sName}: {lName} </Text>
      <Text style = {GlobalStyles.titleSmall}>  </Text>

      {/* Star Ratings */}
      <Text style = {GlobalStyles.textSmall5}> General Rating </Text>
      <CustomRatingBarGR/>
      <Text style = {GlobalStyles.textSmall5}> Level of Difficulity </Text>
      <CustomRatingBarLoD/>     

      {/* Homework and textbook */}
      <Text style = {GlobalStyles.textSmall5}> Homework </Text>
      <TextInput style= {GlobalStyles.textIn2} placeholder="Enter hours per week" textAlign='center' keyboardType='numeric' ></TextInput>
      <Text style={GlobalStyles.textDivider} ></Text>
      <Text style = {GlobalStyles.textSmall5}> Book requirement</Text>
      <Button style = {GlobalStyles.buttonRequire} color = '#646D7E' title = 'Required' />
      <Button style = {GlobalStyles.buttonRequire} color = '#BCC6CC' title = 'Not Required' /> 
      <Text style={GlobalStyles.textDivider} ></Text>
      <Text style={GlobalStyles.textDivider} ></Text>
      <Text style={GlobalStyles.textDivider} ></Text>
      <Text style={GlobalStyles.textDivider} ></Text>

        <Button  
          style = {GlobalStyles.button}
          color = '#880808'
          title = "Submit Ratings" 
          onPress={()=> navigation.navigate('RateSubmit')}
        />  
      </View>
    </KeyboardAwareScrollView>
  )
};

<Button color='gray' title='      Online help     ' onPress={()=> navigation.navigate('Help')}/> 