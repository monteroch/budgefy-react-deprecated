import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SignIn, SignUp } from './screens';
import AppContainer from './routes';

export default function App() {
  return (
    <AppContainer/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
