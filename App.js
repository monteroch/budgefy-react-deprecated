import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SingIn } from './screens/signin';
import { SingUp } from './screens/signup';

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
