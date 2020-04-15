import { createStackNavigator } from 'react-navigation-stack';
import { SignIn, SignUp } from '../screens'

const screens = {
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            title: 'Sign In',
            headerShown: false
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: 'Sign Up',
            headerShown: false
        }
    }
};

export const HomeStackNavigator = createStackNavigator( screens );