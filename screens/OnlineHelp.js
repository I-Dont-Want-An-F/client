/**
 * Created by Dylan, creates the online help page.
 */

import { React, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, ScrollView } from 'react-native';
import { GlobalStyles } from '../shared/GlobalStyles';

//creates the online help page 
export default function OnlineHelp({ navigation }) {
    return (
        <View>
            <ScrollView>
                {/* create a post */}
                <Text style={GlobalStyles.titleBig}> Online Help </Text>
                <Text> </Text>
                <Text style={GlobalStyles.titleSmall2}>Imagine you wanted to leave a comment or question for a class. You can do this by:</Text>
                <Text style={GlobalStyles.textSmall}> 1. Find the class on which you want to comment either by finding it on the home screen or by searching for it using the search bar</Text>
                <Text style={GlobalStyles.textSmall}> 2. Enter your text in the text input box at the bottom of the page underneath the other posts.</Text>

                {/* professor specif page */}
                <Text> </Text>
                <Text style={GlobalStyles.titleSmall2}>
                    Imagine you wanted to go to a professor's specific page for a class with multiple professors. You can do this by:  </Text>
                <Text style={GlobalStyles.textSmall}>
                    1. Find the class on which you want to view the other professors either by finding it on the home screen or by searching for it using the search bar. If there is more than one professor for that class there will be multiple professors listed underneath the title
                </Text>
                <Text style={GlobalStyles.textSmall}>
                    2. Press on the professor you would want to know more about </Text>

                {/* message another user  */}
                <Text> </Text>
                <Text style={GlobalStyles.titleSmall2}>
                    Imagine you wanted to message another user to talk more about a class. You can do this by: </Text>
                <Text style={GlobalStyles.textSmall}>
                    1. Press on the profile button on the top left of the home page</Text>

                <Text style={GlobalStyles.textSmall}>
                    2. Press on the message button located on the top right of the profile screen </Text>

                <Text style={GlobalStyles.textSmall}>
                    3. Press on the user you would like to message </Text>

                {/* rate a class */}
                <Text> </Text>

                <Text style={GlobalStyles.titleSmall2}>
                    Imagine after you finished a class you wanted to rate the class. You can do this by:</Text>

                <Text style={GlobalStyles.textSmall}>
                    1. Find the class on which you want to rate either by finding it on the home screen or by searching for it using the search bar </Text>
                <Text style={GlobalStyles.textSmall}>
                    2. Press on the rate class button located underneath the general rating

                </Text>
                <Text style={GlobalStyles.textSmall}>
                    3. Fill out the fields and then press the submit rating button
                </Text>
                <Text> </Text>

            </ScrollView>
        </View>
    )
}