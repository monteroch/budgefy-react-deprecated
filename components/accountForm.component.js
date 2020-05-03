import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Picker } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { global } from '../shared/styles';

export default function AccountForm(){

    const accountTypes = ['credit-card', 'savings-account', 'cash', 'market-coupons'];

    const [ accountName, setAccountName ] = useState('');
    const [ accountNumber, setAccountNumber ] = useState('');
    const [ accountType, setAccountType ] = useState('cash');

    const handleSubmit = () =>{
        console.log("Button has been pressed");
    }

    return(
        <View style={global.modalFormContainer}>
            <View style={global.modalInputContainer}>
                <View style={styles.pickerWrapper}>
                    <Picker
                        style={styles.pickerStyle}
                        itemStyle={styles.pickerItem}
                        selectedValue={accountType}
                        onValueChange={(value) => setAccountType(value)}
                    >
                        {
                            accountTypes.map((type, index) => (
                                <Picker.Item key={index} label={type} value={type} />
                            ))
                        }
                    </Picker>
                </View>
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
    pickerWrapper: {
        width: '85%',
        padding: 5,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        height: 40
    },
    pickerStyle: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'red',
        height: 40,
        margin: 5,
        color: 'black'
    },
    pickerItem:{
        width: '80%',
        color: 'red'
    }
});

