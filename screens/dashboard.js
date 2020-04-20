import  React, {useState} from 'react';
import { View, Text, StyleSheet, ImageBackground  } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { Card } from '../components'

export default function Dashboard({ navigation, route }){

    const uid = route.params.uid;

    return(
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/bg2.jpg')} style={styles.bgImage} blurRadius={2}>
                <Card>
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
                <Card>
                    <View>
                        <Card>
                            <Text>Balance</Text>
                            <Text>$ 12000</Text>
                        </Card>
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
        width: '80%'
    },
    accountItem: {
        width: 100
    }
});