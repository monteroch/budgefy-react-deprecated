import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Picker, Keyboard } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { global } from '../shared/styles';
import { addPaymentMethod } from '../firebase';

export default function PaymentMethodForm({setModalStatus, uid}){

    const [ accountType, setAccountType ] = useState('cash');
    const [ accountName, setAccountName ] = useState('');
    const [ accountNumber, setAccountNumber ] = useState('');
    const [ amount, setAmount ] = useState(0);

    const accountTypes = [
        { type: 'credit-card', label: 'Credit Card' }, 
        { type: 'savings-account', label: 'Savings Account' }, 
        { type: 'cash', label: 'Cash' }, 
        { type: 'market-coupons', label: 'Market Coupons' }
    ];

    const handleSubmit = () =>{
        let paymentMethod = ({
            type: accountType,
            name: accountName,
            number: accountNumber,
            amount: amount
        });
        addPaymentMethod(paymentMethod, uid);
        Keyboard.dismiss();
        setModalStatus(false);
    }

    return(
        <View style={global.modalFormContainer}>
            <View style={global.modalInputContainer}>
                <SimpleLineIcons name='grid' size={22} style={global.modalFormIcon}/>
                <View style={styles.pickerWrapper}>
                    <Picker
                        label='Type of account'
                        style={styles.pickerStyle}
                        itemStyle={styles.pickerItem}
                        selectedValue={accountType}
                        onValueChange={(value) => setAccountType(value)}
                    >
                        {
                            accountTypes.map((type, index) => (
                                <Picker.Item key={index} label={type.label} value={type.type} />
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
            {
                (accountType === 'credit-card' ||  accountType === 'savings-account')?(
                    <View style={global.modalInputContainer}>
                        <SimpleLineIcons name='credit-card' size={22} style={global.modalFormIcon}/>
                        <TextInput
                            style={global.modalTextInput}
                            type='number'
                            onChangeText={(value) => setAccountNumber(value)}
                            placeholder='Account number'
                            placeholderTextColor='rgba(0, 0, 0, 0.8)'
                            keyboardType='numeric'
                            value={accountNumber}
                        />
                    </View>
                ):(
                    null
                )
            }
            <View style={global.modalInputContainer}>
                <MaterialCommunityIcons name='currency-usd' size={22} style={global.modalFormIcon}/>
                <TextInput
                    style={global.modalTextInput}
                    type='number'
                    onChangeText={value => setAmount(value)}
                    placeholder='Amount'
                    placeholderTextColor='rgba(0, 0, 0, 0.8)'
                    keyboardType='numeric'
                    value={amount}
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
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        height: 40,
        justifyContent: 'center'
    },
    pickerStyle: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'red',
        height: 40,
        color: 'rgba(0, 0, 0, 0.7)'
    }
});

