import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppContainer from './routes';
import { initFirebase } from './firebase';

export default function App() {

  useEffect(() => {
    initFirebase();
  }, []);

  return (
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
