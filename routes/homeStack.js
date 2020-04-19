import { createStackNavigator } from '@react-navigation/stack';
import { SignIn, SignUp, Home } from '../screens'
import  React from 'react';

const HomeStackNavigator = createStackNavigator();

export function MyStack() {
    return (
      <HomeStackNavigator.Navigator initialRouteName='SignIn'>
        <HomeStackNavigator.Screen name='SignIn' component={SignIn} options={ {headerShown: false} } />
        <HomeStackNavigator.Screen name='SignUp' component={SignUp} options={ {headerShown: false} } />
        <HomeStackNavigator.Screen name='Home' component={Home} options={ {headerShown: false} } />
      </HomeStackNavigator.Navigator>
    );
}
