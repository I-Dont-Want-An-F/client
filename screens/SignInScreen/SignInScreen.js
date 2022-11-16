import React, {useState} from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../assets/images/logo4.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from "../../components/CustomButton/CustomButton";
import SocialSignInButtons from "../../components/SocalSignInButtons";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../shared/GlobalStyles";

const SignInScreen = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();

    const navigation = useNavigation();

    const onSignInPressed = () => {
        navigation.navigate('Home') };

    const onSignUpPressed = () => {
        navigation.navigate('Sign Up') };

    const onContinueAsGuest = () => {
        navigation.navigate('Home') };

    return (
        <ScrollView>
        <View style={styles.root}>
            <Image 
                source={Logo} 
                style={[styles.loop, {height: height * 0.3}]}
                resizeMode='contain' 
            />
            <CustomInput 
                placeholder="Username" 
                value={username} 
                setValue={setUsername} 
            />
            <CustomInput 
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry
            />

            <CustomButton 
                text="Sign In"
                onPress={onSignInPressed}
            />

            <CustomButton
                text="Continue as Guest"
                onPress={onContinueAsGuest}
                type='TERTIARY'
            />

            <SocialSignInButtons />

            <CustomButton
                text="Don't have an account? Create one!"
                onPress={onSignUpPressed}
                type="TERTIARY"
            />

        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#4000000',
    },
    logo: {
        width: '100%',
        height: '100%',
    },
});

export default SignInScreen;