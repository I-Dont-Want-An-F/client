import React, { useEffect, useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView, Image, ActivityIndicator, SafeAreaView } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { TabRouter } from '@react-navigation/native';
import { GlobalStyles } from '../shared/GlobalStyles';
import Post from '../shared/Post';
import { URL } from '../shared/URL';

export default function SubDetailsScreen({ route, navigation }) {

    const { sName, lName, pName } = route.params;
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
        getRating();
        getPost();
    }, []);

    return (
        <View backGroundColor='#DABEA7' >
            <Text style={GlobalStyles.titleBig}> {sName + ': ' + lName} </Text>

            <View style={GlobalStyles.titleSmall}>
                <Text style={GlobalStyles.titleSmall}>{'Professor: ' + pName}</Text>
            </View>

            <View style={GlobalStyles.titleSmall}>
                {rating.map((rating) => {
                    return (
                        <View key={rating} style={GlobalStyles.background2}>
                            <Text style={GlobalStyles.textSmall}> {'General Rating: ' + rating.stars} </Text>
                            <Text style={GlobalStyles.textSmall}> {'Difficulty: ' + rating.dif} </Text>
                            <Text style={GlobalStyles.textSmall}> {'Homework frequency: ' + rating.hw} </Text>
                            <Text style={GlobalStyles.textSmall}> {'Textbook requirement: ' + rating.book} </Text>
                        </View>
                    );
                })}
            </View>

            <View style={styles.container}>
                <Button color={'#880808'} title="Rate Class" onPress={() => (navigation.navigate('Rate', { sName, lName }))} />
                <View style={styles.space2} />
                <Button color={'#880808'} title="Comments" />
                <View style={styles.space2} />
                <Button color={'#880808'} title="Questions" />
                <View style={styles.space2} />
                <Button color={'#880808'} title="All" />
            </View>

            <Text style={GlobalStyles.titleSmall}> {'Showing all posts:'} </Text>

            <FlatList data={post} renderItem={({ item }) => (
                <View style={GlobalStyles.background2}>
                    <TouchableOpacity onPress={() => navigation.navigate("Post", item)}>
                        <Text key={item.id} style={GlobalStyles.textSmall}> {item.username + ":"} {item.text} </Text>
                    </TouchableOpacity>
                </View>
            )} />

            <FlatList data={comments} renderItem={({ item }) => (
                <View style={GlobalStyles.background2}>
                    {/* <TouchableOpacity onPress={() => navigation.navigate("Post", item)}> */}
                        <Text key={item} style={GlobalStyles.textSmall}> {item.user1} {item.post} </Text>
                    {/* </TouchableOpacity> */}
                </View>
            )} />

            <TextInput style={styles.post} placeholder="post a comment" onSubmitEditing={(event) => { setComment([...comments, { user1: "etl3:", post: event.nativeEvent.text }]) }} >{ }</TextInput>
        </View>
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