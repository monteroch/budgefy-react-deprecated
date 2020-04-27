import React from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableHighlight } from 'react-native';
import Card from './card.component';
import { global }  from '../shared/styles';
import { MaterialIcons } from '@expo/vector-icons';

export default function AccountsList({accounts, toogleModal}){
    
    const addAcount = () => {
        console.log('Adding account');
    };

    return(
        (accounts)? (
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
        ):(
            <Card width={380}>
                <View style={styles.emptyAccountsContainer}>
                    <Text style={[global.textMainColor, styles.addAccountTitle]}>Add account?</Text>
                    <TouchableHighlight style={styles.buttonContainer} onPress={ addAcount }>
                        <MaterialIcons name='add' size={26} onPress={() => toogleModal(true)} style={[ styles.addAccountIcon, global.textMainColor]}/>
                    </TouchableHighlight>
                </View>
            </Card>
        )
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
    },
    emptyAccountsContainer:{
        alignItems: 'center',
    },
    buttonContainer:{
        alignItems: 'center'
    },
    addAccountIcon:{
        marginTop: 15,
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        alignSelf: 'center',
        borderColor: 'rgba(255, 255, 255, 0.5)'
    },
    addAccountTitle: {
        alignSelf: 'center'
    },
});