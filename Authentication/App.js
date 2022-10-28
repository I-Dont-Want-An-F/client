/**
 * Author: Chang Liu
 * Date: 2022/10/23
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import SignInScreen from './screens/SignInScreen'
import SignUpScreen from './screens/SignUpScreen';


const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <SignInScreen />
      <SignUpScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'F9FBFC',
  }
});

export default App;
