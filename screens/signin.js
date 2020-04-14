import  React, {useState} from 'react';
import { View, TextInput, StyleSheet, Image, Text , TouchableWithoutFeedback, Keyboard, TouchableHighlight } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { formStyles } from '../shared/styles';

export function SingIn(){

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = () => {
        console.log(`The email and password are: ${email}: ${password}`);
    }

    const goToSignUp = () => {
        console.log('going to sign up');
    }

    return(
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>
            <View style={formStyles.container}>
                <Image source={require('../assets/images/logo.png')} style={styles.logo}/>
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
                <TouchableHighlight style={formStyles.button} onPress={handleSubmit}>
                    <Text style={formStyles.buttonText}>SIGN IN</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={goToSignUp}>
                    <Text style={formStyles.bottomLegend}> Don'thave an account? <Text style={formStyles.boldText}> Sign Up</Text></Text>
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