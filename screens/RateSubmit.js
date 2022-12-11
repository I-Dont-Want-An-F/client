// created by Chang, creates successful submit ratings page
import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView, Image, ActivityIndicator, SafeAreaView, SnapshotViewIOS } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { GlobalStyles } from '../shared/GlobalStyles';
import RateScreen from './RateScreen';
import ThankPic from '../assets/images/thank.webp';

// creates the successful submit ratings page
export default function RateSubmit({ navigation }) {
    return (
        <View style={GlobalStyles.background3}>
            <ScrollView>
            <Text></Text>
            {/* Thank the user for rating */}
            <Text style={GlobalStyles.titleBig}> Thanks for your ratings</Text>
            <Text style={GlobalStyles.titleSmall}> Your ratings have been received</Text>
            <Image 
                style={GlobalStyles.ratePic} 
                source={ThankPic} />
            {/* Navigate back to Home */}
            <Button style = {GlobalStyles.buttonRequire} title='Home' color = '#800000' onPress={() => (navigation.navigate('Home'))}></Button>
            </ScrollView>
        </View>
    )
    };