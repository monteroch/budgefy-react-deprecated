import  React, {useState} from 'react';
import { View, Text, StyleSheet, ImageBackground, VirtualizedList, ScrollView } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { Card } from '../components'
import { global } from '../shared/styles';
import { database } from 'firebase';
import { MaterialIcons } from '@expo/vector-icons';


export default function Dashboard({ navigation, route }){

    const uid = route.params.uid;

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
            title: 'Camisa',
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

    return(
        <ImageBackground source={require('../assets/images/bg2.jpg')} style={styles.container} blurRadius={2}>
        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            <Card width={380}>
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
            <Card width={380}>
                <View>
                    <Text style={styles.balanceTitle}>Balance</Text>
                </View>
                <View style={global.centerItems}>
                    <Text style={styles.balance}>$12 000</Text>
                </View>
            </Card>
            <Card width={380}>
                <View>
                    <Text style={styles.balanceTitle}>Last records overview</Text>
                </View>
                <View>
                    {
                        records.map((item) => {
                            return(
                                <View key={item.id} style={styles.listItem}>
                                    <MaterialIcons name='shopping-cart' size={28} style={styles.icon}/>
                                    <View style={styles.itemDescription}>
                                        <Text style={styles.title}>{item.title}</Text>
                                        <Text style={styles.paymentMethod}>{item.paymentMethod}</Text>
                                    </View>
                                    <View style={styles.itemResume}>
                                        <Text style={styles.value}>$ {item.value}</Text>
                                        <Text style={styles.date}>{item.date}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
            </Card>
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
    listContainer: {
        flexGrow: 1
    },
    listItem:{
        height: 50,
        margin: 5,
        paddingVertical: 5,
        color: 'rgb(255, 255, 255)',
        flexDirection: 'row',
        alignContent: 'center'
    },
    icon: {
        color: 'rgb(255, 255, 255)'
    },
    itemDescription:{
        flexGrow: 4,
        marginLeft: 15
    },
    itemResume:{
        flexGrow: 1,
        alignItems: 'flex-end'
    },
    title:{
        color: '#fff',
        fontSize: 18
    },
    paymentMethod:{
        color: '#979aaa',
        marginTop: 3,
        fontSize: 11
    },
    value:{
        color: '#ff6e4a',
        fontSize: 14
    },
    date:{
        color: '#979aaa',
        marginTop: 3,
        fontSize: 12
    }

});