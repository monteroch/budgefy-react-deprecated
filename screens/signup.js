import  React, {useState} from 'react';
import { View, TextInput, StyleSheet, Image, Text , TouchableWithoutFeedback, Keyboard, TouchableHighlight } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { formStyles } from '../shared/styles';
import { createUser } from '../firebase';

export default function SignUp({ navigation }){

    const [ fullname, setFullname ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordConfirmation, setPasswordConfirmation ] = useState('');

    const handleSubmit = () => {
        console.log(`The email and password are: ${email}: ${password}`);
        let uid = createUser(email, password, fullname);
        navigation.navigate('Home')
    }

    const goToSignUp = () => {
        console.log('going to sign up');
    }

    return(
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>
            <View style={formStyles.container}>
                <View style={formStyles.inputContainer}>
                <SimpleLineIcons name='user' size={22} style={formStyles.icon}/>
                    <TextInput
                        style={formStyles.formInput}
                        onChangeText={fullname => setFullname(fullname)}
                        placeholder='Fullname'
                        placeholderTextColor='rgba(255, 255, 255, 0.5)'
                        value={fullname}
                    />
                </View>
                <View style={formStyles.inputContainer}>
                    <MaterialCommunityIcons name='email-outline' size={22} style={formStyles.icon}/>
                    <TextInput
                        style={formStyles.formInput}
                        onChangeText={email => setEmail(email)}
                        placeholder='Email'
                        placeholderTextColor='rgba(255, 255, 255, 0.5)'
                        value={email}
                    />
                </View>
                <View style={formStyles.inputContainer}>
                    <SimpleLineIcons name='lock' size={22} style={formStyles.icon}/>
                    <TextInput
                        style={formStyles.formInput}
                        secureTextEntry={true}
                        onChangeText={password => setPassword(password)}
                        placeholder='Password'
                        placeholderTextColor='rgba(255, 255, 255, 0.5)'
                        value={password}
                    />
                </View>
                <View style={formStyles.inputContainer}>
                    <SimpleLineIcons name='lock' size={22} style={formStyles.icon}/>
                    <TextInput
                        style={formStyles.formInput}
                        secureTextEntry={true}
                        onChangeText={passwordConfirmation => setPasswordConfirmation(passwordConfirmation)}
                        placeholder='Password'
                        placeholderTextColor='rgba(255, 255, 255, 0.5)'
                        value={passwordConfirmation}
                    />
                </View>
                <TouchableHighlight style={formStyles.button} onPress={handleSubmit}>
                    <Text style={formStyles.buttonText}>CREATE ACCOUNT</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => navigation.navigate('SignIn')}>
                    <Text style={formStyles.bottomLegend}> Already have an account? <Text style={formStyles.boldText}> Login</Text></Text>
                </TouchableHighlight>
            </View>
        </TouchableWithoutFeedback>
    )
};
