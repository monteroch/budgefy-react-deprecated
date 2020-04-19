import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import { initFirebase } from './firebase';

import { MyStack } from './routes/homeStack';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './routes/RootNavigation';


export default function App() {

  useEffect(() => {
    initFirebase();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <MyStack/>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
