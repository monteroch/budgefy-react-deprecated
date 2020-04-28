import  React, {useState} from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TextInput, TouchableHighlight } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { Card, AccountsList, Balance, RecordsList, CustomModal } from '../components'
import { global } from '../shared/styles';
import { database } from 'firebase';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


export default function Dashboard({ navigation, route }){

    const uid = route.params.uid;
    const [modalStatus, setModalStatus ] = useState(false);
    const [ accountName, setAccountName ] = useState('');
    const [ accountNumber, setAccountNumber ] = useState('');

    const toogleModal = (status) => {
        setModalStatus(status);
    }

    const handleSubmit = () =>{
        console.log("Button has been pressed");
    }

    const records = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Caguamas',
            value: '90',
            paymentMethod: 'AMEX',
            date: '4/20/2020'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Carnita Asada',
            value: '300',
            paymentMethod: 'Bancomer',
            date: '4/20/2020'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Sushi',
            value: '150',
            paymentMethod: 'Cash',
            date: '4/20/2020'
        },
        {
            id: '58694a0f-3tr1-47if-bd96-145554749d72',
            title: 'Alitas',
            value: '250',
            paymentMethod: 'HSBC',
            date: '4/20/2020'
        },
      ];

      const accounts = [
          {
            name: 'Banamex',
            id: '00001',
            balance: 2000
          },
          {
            name: 'HSBC',
            id: '00002',
            balance: 3000
        },
        {
            name: 'Amex',
            id: '00003',
            balance: 7000
        },
        {
            name: 'Bancomer',
            id: '00004',
            balance: 4000
        },
        {
            name: 'Cash',
            id: '00005',
            balance: 700
        },
      ]

    return(
        <ImageBackground source={require('../assets/images/bg2.jpg')} style={styles.container} blurRadius={2}>
            <CustomModal modalStatus={modalStatus} setModalStatus={setModalStatus} title="Add account">
                <View style={global.modalFormContainer}>
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
                            onChangeText={accountNumber => setAccountNumber(accountNumber)}
                            placeholder='Account number'
                            placeholderTextColor='rgba(0, 0, 0, 0.8)'
                            value={accountNumber}
                        />
                    </View>
                    <TouchableHighlight style={global.modalButton} onPress={handleSubmit}>
                        <Text style={global.modalButtonText}>ADD ACCOUNT</Text>
                    </TouchableHighlight>
                </View>
            </CustomModal>
            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <AccountsList accounts={null} toogleModal={toogleModal}/>
                <Balance balance={"13000"}/>
                <RecordsList records={records}/>
                <Text>{ uid }</Text>
            </ScrollView>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 70,
    },
    scrollContainer: {
        paddingTop: 10
    },
    listContainer: {
        flexGrow: 1
    }
});

{/* https://medium.com/@rossbulat/react-native-carousels-with-horizontal-scroll-views-60b0587a670c */}