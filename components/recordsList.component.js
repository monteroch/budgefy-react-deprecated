import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from './card.component';
import { MaterialIcons } from '@expo/vector-icons';

export default function RecordsList({records}){
    return(
        <Card width={380}>
            <View>
                <Text style={styles.cardTitle}>Last records overview</Text>
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
    )
};

const styles = StyleSheet.create({
    cardTitle:{
        color: 'rgb(255, 255, 255)'
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