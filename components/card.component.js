import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Card(props){
    return(
        <View style={[styles.card, props.width ? {minWidth: props.width} : styles.default]}>
            <View style={styles.cardContent}>
                { props.children }
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        marginHorizontal: 4,
        marginVertical: 6,
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 20
    },
    default: {
        
    }
});