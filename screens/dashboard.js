import  React, {useState} from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { Card } from '../components'
import { global } from '../shared/styles';

export default function Dashboard({ navigation, route }){

    const uid = route.params.uid;

    const records = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
          value: '1000',
          paymentMethod: 'AMEX',
          date: '4/20/2020'
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
          value: '520',
          paymentMethod: 'Bancomer',
          date: '4/20/2020'
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
          value: '869',
          paymentMethod: 'Cash',
          date: '4/20/2020'
        },{
            id: '58694a0f-3tr1-47if-bd96-145554749d72',
            title: 'Fourth Item',
            value: '125',
            paymentMethod: 'HSBC',
            date: '4/20/2020'
          },
      ];

    return(
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/bg2.jpg')} style={styles.bgImage} blurRadius={2}>
                <Card width={370}>
                    <Text style={styles.cardTitle}>List of accounts</Text>
                    <View style={styles.accountsContainer}>
                        <Card style={styles.accountItem} width={100}>
                            <Text style={styles.cardTitle}>Banamex</Text>
                            <Text style={styles.cardTitle}>$2000</Text>
                        </Card>
                        <Card style={styles.accountItem} width={100}>
                            <Text style={styles.cardTitle}>HSBC</Text>
                            <Text style={styles.cardTitle}>$3000</Text>
                        </Card>
                        <Card style={styles.accountItem} width={100}>
                            <Text style={styles.cardTitle}>AMEX</Text>
                            <Text style={styles.cardTitle}>$7000</Text>
                        </Card>
                    </View>
                </Card>
                <Card width={370}>
                    <View>
                        <Text style={styles.balanceTitle}>Balance</Text>
                    </View>
                    <View style={global.centerItems}>
                        <Text style={styles.balance}>$12 000</Text>
                    </View>
                </Card>
                <Card width={370}>
                <View>
                    <Text style={styles.balanceTitle}>Last records overview</Text>
                </View>
                
                </Card>
                <Text>{ uid }</Text>
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bgImage: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardTitle: {
        color: 'rgb(255, 255, 255)',
        marginBottom: 10
    },
    accountsContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    accountItem: {
        width: 100
    },
    balanceTitle: {
        color: 'rgb(255, 255, 255)'
    },
    balance: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgb(0,230,173)'
    },
});