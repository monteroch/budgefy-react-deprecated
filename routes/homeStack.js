import { createStackNavigator } from '@react-navigation/stack';
import { SignIn, SignUp, Dashboard } from '../screens'
import  React from 'react';
import { Header } from '../components';

const HomeStackNavigator = createStackNavigator();

export function MyStack() {
    return (
      <HomeStackNavigator.Navigator initialRouteName='SignIn'>
        <HomeStackNavigator.Screen name='SignIn' component={SignIn} options={ {headerShown: false} } />
        <HomeStackNavigator.Screen name='SignUp' component={SignUp} options={ {headerShown: false} } />
        <HomeStackNavigator.Screen 
          name='Dashboard' 
          component={Dashboard} 
          options={ 
            {
              header: () => <Header title='Dashboard'/>,
              headerTransparent: true
            } 
          } 
        />
      </HomeStackNavigator.Navigator>
    );
}
