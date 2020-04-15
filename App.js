import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SignIn, SignUp } from './screens';
import AppContainer from './routes';
import { initFirebase } from './firebase';

export default function App() {

  useEffect(() => {
    initFirebase();
  }, []);

  return (
    <AppContainer/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
