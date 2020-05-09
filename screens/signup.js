import  React, {useState} from 'react';
import { View, TextInput, StyleSheet, Image, Text , TouchableWithoutFeedback, Keyboard, TouchableHighlight } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { global } from '../shared/styles';
import { createUser } from '../firebase';
import { useDispatch } from "react-redux";
import { registerRequest } from '../redux/actions/index';

export default function SignUp({ navigation }){

    const [ fullname, setFullname ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordConfirmation, setPasswordConfirmation ] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = () => {
        console.log(`The email and password are: ${email}: ${password}`);
        dispatch(registerRequest({
            email: email,
            password: password,
            fullname: fullname
        }));
        // let uid = createUser(email, password, fullname);
        setFullname("");
        setEmail("");
        setPassword("");
        setPasswordConfirmation("");
    }

    const goToSignUp = () => {
        console.log('going to sign up');
    }

    return(
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>
            <View style={global.container}>
                <View style={global.inputContainer}>
                <SimpleLineIcons name='user' size={22} style={global.icon}/>
                    <TextInput
                        style={global.formInput}
                        onChangeText={fullname => setFullname(fullname)}
                        placeholder='Fullname'
                        placeholderTextColor='rgba(255, 255, 255, 0.5)'
                        value={fullname}
                    />
                </View>
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
                <View style={global.inputContainer}>
                    <SimpleLineIcons name='lock' size={22} style={global.icon}/>
                    <TextInput
                        style={global.formInput}
                        secureTextEntry={true}
                        onChangeText={passwordConfirmation => setPasswordConfirmation(passwordConfirmation)}
                        placeholder='Password'
                        placeholderTextColor='rgba(255, 255, 255, 0.5)'
                        value={passwordConfirmation}
                    />
                </View>
                <TouchableHighlight style={global.button} onPress={handleSubmit}>
                    <Text style={global.buttonText}>CREATE ACCOUNT</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => navigation.navigate('SignIn')}>
                    <Text style={global.bottomLegend}> Already have an account? <Text style={global.boldText}> Login</Text></Text>
                </TouchableHighlight>
            </View>
        </TouchableWithoutFeedback>
    )
};
