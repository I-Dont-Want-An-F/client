import React from "react";
import {View, Text} from 'react-native';
import CustomButton from "../CustomButton/CustomButton";

const onSignInFacebook = () => {
    console.warn("Sign in with Facebook"); };

const onSignInGoogle = () => {
    console.warn("Sign in with Google"); };

const SocialSignInButtons = () => {
    return (
        <>
            <CustomButton 
                text="Sign In with Facebook"
                onPress={onSignInFacebook}
                bgColor='#E7EAF4'
                fgColor='#4765A9'
            />
            <CustomButton 
                text="Sign In with Google"
                onPress={onSignInGoogle}
                bgColor='#FAE9EA'
                fgColor='#DD3D33'
            />
        </>
    );
};

export default SocialSignInButtons;