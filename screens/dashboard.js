import  React, {useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TextInput, TouchableHighlight } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { PaymentMethodList, Balance, RecordsList, CustomModal, PaymentMethodForm } from '../components'
import * as firebase from 'firebase';


export default function Dashboard({ navigation, route }){

    const uid = route.params.uid;
    const [modalStatus, setModalStatus ] = useState(false);
    const [user, setUser ] = useState({});
    const [paymentMethods, setPaymentMethods ] = useState(null);

    const toogleModal = (status) => {
        setModalStatus(status);
    }

    useEffect(() => {
        //get userInfo
        var userData = firebase.database().ref('users/' + uid );
        userData.on('value', function(snapshot) {
            setUser(snapshot.val());
            console.log('The user is: ', user);
            // let pm = user.paymentMethods;
            // const pmArray = Object.values(pm)
            // setPaymentMethods(pmArray);
        });
    }, [])

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

    //   const paymentMethods = [
    //       {
    //         name: 'Banamex',
    //         id: '00001',
    //         balance: 2000
    //       },
    //       {
    //         name: 'HSBC',
    //         id: '00002',
    //         balance: 3000
    //     },
    //     {
    //         name: 'Amex',
    //         id: '00003',
    //         balance: 7000
    //     },
    //     {
    //         name: 'Bancomer',
    //         id: '00004',
    //         balance: 4000
    //     },
    //     {
    //         name: 'Cash',
    //         id: '00005',
    //         balance: 700
    //     },
    //   ]

    return(
        <ImageBackground source={require('../assets/images/bg2.jpg')} style={styles.container} blurRadius={2}>
            <CustomModal modalStatus={modalStatus} setModalStatus={setModalStatus} title="Add account" fixed={true}>
                <PaymentMethodForm uid={uid} setModalStatus={setModalStatus}/>
            </CustomModal>
            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <PaymentMethodList paymentMethods={paymentMethods} toogleModal={toogleModal}/>
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