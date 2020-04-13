import  React, {useState} from 'react';
import { View, TextInput, StyleSheet, Image, Text , TouchableWithoutFeedback, Keyboard, TouchableHighlight } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

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
            <View style={styles.container}>
                <Image source={require('../assets/images/logo.png')} style={styles.logo}/>
                <View style={styles.inputContainer}>
                    <MaterialCommunityIcons name='email-outline' size={22} style={styles.icon}/>
                    <TextInput
                        style={styles.formInput}
                        onChangeText={email => setEmail(email)}
                        placeholder='Email'
                        placeholderTextColor='rgba(255, 255, 255, 0.5)'
                        value={email}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <SimpleLineIcons name='key' size={22} style={styles.icon}/>
                    <TextInput
                        style={styles.formInput}
                        secureTextEntry={true}
                        onChangeText={password => setPassword(password)}
                        placeholder='Password'
                        placeholderTextColor='rgba(255, 255, 255, 0.5)'
                        value={password}
                    />
                </View>
                <TouchableHighlight style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Sign in</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={goToSignUp}>
                    <Text style={styles.createAccountText}> Don'thave an account? <Text style={styles.boldText}> Sign Up</Text></Text>
                </TouchableHighlight>
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282b3a',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: '40%',
        resizeMode: 'contain',
        maxHeight: 190,
        marginBottom: 30
    },
    inputContainer: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    formInput: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.2)',
        width: '85%',
        height: 35,
        color: '#fff'
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.5)',
        marginRight: 20,
    },
    button: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        marginVertical: 20,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.5)'
    },
    buttonText: {
        color: 'rgba(255, 255, 255, 0.5)'
    },
    createAccountText: {
        color: 'rgba(255, 255, 255, 0.5)'
    },
    boldText: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontWeight: 'bold'
    }
});