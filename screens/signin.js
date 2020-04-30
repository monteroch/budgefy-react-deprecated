import  React, {useState} from 'react';
import { View, TextInput, StyleSheet, Image, Text , TouchableWithoutFeedback, Keyboard, TouchableHighlight, Animated, Easing } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useDispatch, useSelector } from "react-redux";
import { global } from '../shared/styles';
import { login } from '../firebase';
import { loginRequest } from '../redux/actions/index';

export default function SignIn({ navigation }){

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    let scaleValue = new Animated.Value(0); // declare an animated value [1]

    const cardScale = scaleValue.interpolate({  //[2]
        inputRange: [0, 0.5, 1],
        outputRange: [1, 1.1, 1.2]
    });

    const dispatch = useDispatch();
    const uid = useSelector(state => state.uid);

    const handleSubmit = () => {
        console.log(`The email and password are: ${email}: ${password}`);
        login(email, password);
        setEmail("");
        setPassword("");
    }

    const goToSignUp = () => {
        console.log('going to sign up');
    }

    let transformStyle = { ...styles.logo, transform: [{ scale: cardScale }] };

    return(
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>
            <View style={global.container}>
                <TouchableWithoutFeedback onPressIn={ () => {
                    scaleValue.setValue(0);
                    Animated.timing(scaleValue, {
                        toValue: 1,
                        duration: 250,
                        easing: Easing.linear,
                        useNativeDriver: true
                    }).start();
                }}
                
                onPressOut={ () => {
                    Animated.timing(scaleValue, {
                        toValue: 0,
                        duration: 100,
                        easing: Easing.linear,
                        useNativeDriver: true
                    }).start();
                }}
                >
                    <Animated.Image source={require('../assets/images/logo.png')} style={transformStyle}/>
                </TouchableWithoutFeedback>
                <View style={global.inputContainer}>
                    <MaterialCommunityIcons name='email-outline' size={22} style={global.icon}/>
                    <TextInput
                        style={global.formInput}
                        onChangeText={email => setEmail(email)}
                        placeholder='Email'
                        placeholderTextColor='rgba(255, 255, 255, 0.5)'
                        value={email}
                    />
                </View>
                <View style={global.inputContainer}>
                    <SimpleLineIcons name='lock' size={22} style={global.icon}/>
                    <TextInput
                        style={global.formInput}
                        secureTextEntry={true}
                        onChangeText={password => setPassword(password)}
                        placeholder='Password'
                        placeholderTextColor='rgba(255, 255, 255, 0.5)'
                        value={password}
                    />
                </View>
                <TouchableHighlight style={global.button} onPress={handleSubmit}>
                    <Text style={global.buttonText}>SIGN IN</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={ () => navigation.navigate('SignUp') }>
                    <Text style={global.bottomLegend}> Don'thave an account? <Text style={global.boldText}> Sign Up</Text></Text>
                </TouchableHighlight>
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    logo: {
        width: '40%',
        resizeMode: 'contain',
        maxHeight: 190,
        marginBottom: 30
    }
});