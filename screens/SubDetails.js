import React, { useEffect, useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView, Image, ActivityIndicator, SafeAreaView } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { TabRouter } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { GlobalStyles } from '../shared/GlobalStyles';
import Post from '../shared/Post';
import { getLocalData } from '../shared/LocalStorage';
import { URL } from '../shared/URL';

export default function SubDetailsScreen({ route, navigation }) {

    const { sName, lName, pName } = route.params;
    const [username, setUsername] = useState();
    const [prof, setProf] = useState([]);
    const [rating, setRating] = useState([]);
    const [post, setPost] = useState([]);
    const [comments, setComment] = useState([]);

    const [defaultRating, setDefaultRating] = useState(2);
    const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);
    const starImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png';

    const getRating = async () => {
        try {
            const response = await fetch(URL + '/rating/' + sName)
            const json = await response.json();
            setRating(json);
        } catch (error) {
            console.error(error);
        }
    }

    const getPost = async () => {
        try {
            const response = await fetch(URL + '/post/' + sName)
            const json = await response.json();
            setPost(json);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getLocalData('username').then((data) => { setUsername(data.toLocaleLowerCase()) });
        getRating();
        getPost();
    }, []);

    return (
        <KeyboardAwareScrollView backGroundColor='#DABEA7' >
            <Text style={GlobalStyles.titleBig}> {sName + ': ' + lName} </Text>

            <View style={GlobalStyles.titleSmall}>
                <Text style={GlobalStyles.titleSmall}>{'Professor: ' + pName}</Text>
            </View>

            <Text style={GlobalStyles.textDivider} ></Text>

            <View style={GlobalStyles.titleSmall}>
                {rating.map((rating) => {
                    return (
                        <View key={rating} style={GlobalStyles.background2}>
                            <Text style={GlobalStyles.textSmall3}> {'General Rating: ' + rating.stars + ' / 5'} </Text>
                            <Text style={GlobalStyles.textSmall3}> {'Difficulty: ' + rating.dif + ' / 5'} </Text>
                            <Text style={GlobalStyles.textSmall3}> {'Homework frequency: ' + 'Approximately ' + rating.hw + ' hours per week'} </Text>
                            <Text style={GlobalStyles.textSmall3}> {'Textbook requirement: ' + rating.book} </Text>
                        </View>
                    );
                })}
            </View>

            <Text style={GlobalStyles.textDivider} ></Text>

            <Button color={'#0909FF'} title="Rate Class" onPress={() => (navigation.navigate('Rate', { sName, lName }))} />
            <Text style={GlobalStyles.textDivider} ></Text>

            <Text style={GlobalStyles.titleSmall}> {'Showing all posts:'} </Text>

            <View style={styles.container}>
                <Text style={GlobalStyles.textSmall4}> Filter by</Text>
                <View style={styles.space2} />
                <Button color={'#757575'} title="Comments" />
                <View style={styles.space2} />
                <Button color={'#757575'} title="Questions" />
                <View style={styles.space2} />
                <Button color={'#757575'} title="All" />
            </View>

            <View style={GlobalStyles.titleSmall}>
                {post.map((post) => {
                    return (
                        <View key={post.id} style={GlobalStyles.background2}>
                            <TouchableOpacity onPress={() => navigation.navigate("Post", post)}>
                                <Text key={post.id} style={GlobalStyles.textSmall}> {post.username + ":"} {post.text} </Text>
                            </TouchableOpacity>
                        </View>
                    );
                })}
            </View>

            <View style={GlobalStyles.titleSmall}>
                {comments.map((item) => {
                    return (
                        <View key={item.post} style={GlobalStyles.background2}>
                            <Text style={GlobalStyles.textSmall}> {item.user1 + ":"} {item.post} </Text>
                        </View>
                    );
                })}
            </View>

            <TextInput style={styles.post} placeholder="post a comment" onSubmitEditing={(event) => { setComment([...comments, { user1: username, post: event.nativeEvent.text }]) }} >{ }</TextInput>
        </KeyboardAwareScrollView>
    );
}

export const styles = StyleSheet.create({
    container: {
        //flex: 1,
        width: 350,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    post: {
        textAlign: "center",
        alignSelf: "center",
        width: 350,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 15,
        padding: 10,
    },
    box: {
        borderWidth: 1,
        margin: 5,
        padding: 5,
        fontSize: 15
    },
    space2: {
        width: 10,
        height: 20,
    },
    CustomRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 5
    },
    starImgStyle: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
    }
});