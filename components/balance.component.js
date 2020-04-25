import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from './card.component';
import { global } from '../shared/styles';

export default function Balance({balance}){
    return(
        <Card width={380}>
            <View>
                <Text style={styles.cardTitle}>Balance</Text>
            </View>
            <View style={global.centerItems}>
                <Text style={styles.balance}>${ balance }</Text>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    cardTitle: {
        color: 'rgb(255, 255, 255)'
    },
    balance: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgb(0,230,173)'
    },
});