import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { Card } from './index';

export default function AccountsList({accounts}){
    return(
        <Card width={380}>
            <Text style={styles.cardTitle}>List of accounts</Text>
            <ScrollView style={styles.accountsScroll} horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    accounts.map(account => (
                        <Card key={account.id} style={styles.accountItem} width={105}>
                            <Text style={styles.cardTitle}>{account.name}</Text>
                            <Text style={styles.cardTitle}>${account.balance}</Text>
                        </Card>
                    ))
                }
            </ScrollView>
        </Card>
    )
};

const styles = StyleSheet.create({
    cardTitle: {
        color: 'rgb(255, 255, 255)',
        marginBottom: 10
    },
    accountsScroll: {
        flexDirection: 'row',
        width: 340,
        alignSelf:'center'
    },
    accountsContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    accountItem: {
        width: 100
    }
});