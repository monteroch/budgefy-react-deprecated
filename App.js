import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SingIn } from './components/signin.component';
import { SingUp } from './components/signup.component';

export default function App() {
  return (
    <View style={styles.container}>
      <SingIn/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
