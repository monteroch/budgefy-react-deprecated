import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Picker, TouchableWithoutFeedback } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { global } from '../shared/styles';
import Select from './select.component';

export default function AccountForm(){

    const [ accountName, setAccountName ] = useState('');
    const [ accountNumber, setAccountNumber ] = useState('');
    const [ accountType, setAccountType ] = useState('Select');
    const [ placeholder, showPlaceholder ] = useState(true);

    const handleSubmit = () =>{
        console.log("Button has been pressed");
    }

    return(
        <View style={global.modalFormContainer}>
            <View style={global.modalInputContainer}>
                <Select/>
            </View>
            <View style={global.modalInputContainer}>
                <SimpleLineIcons name='tag' size={22} style={global.modalFormIcon}/>
                <TextInput
                    style={global.modalTextInput}
                    onChangeText={accountName => setAccountName(accountName)}
                    placeholder='Account name'
                    placeholderTextColor='rgba(0, 0, 0, 0.8)'
                    value={accountName}
                />
            </View>
            <View style={global.modalInputContainer}>
                <SimpleLineIcons name='credit-card' size={22} style={global.modalFormIcon}/>
                <TextInput
                    style={global.modalTextInput}
                    onChangeText={ console.log('Change')}
                    placeholder='Account number'
                    placeholderTextColor='rgba(0, 0, 0, 0.8)'
                    value={accountNumber}
                />
            </View>
            <TouchableHighlight style={global.modalButton} onPress={handleSubmit}>
                <Text style={global.modalButtonText}>ADD ACCOUNT</Text>
            </TouchableHighlight>
        </View>
    )

};

const styles = StyleSheet.create({
    select: {
        color: 'rgb(0, 0, 0)',
        width: '80%',
        borderWidth: 1,
        borderColor: 'red',
        color: 'red',
        alignSelf: 'flex-end'
    }
});

