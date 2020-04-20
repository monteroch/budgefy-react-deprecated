import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }){
    return(
        <View style={styles.headerContainer}>
            <MaterialIcons name='menu' size={28} style={styles.icon}/>
            <Text style={styles.title}>{ title }</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        paddingTop: 10,
        flexDirection: 'row'
    },
    title: {
        color: 'rgb(255, 255, 255)',
        fontSize: 16
    },
    icon: {
        color: 'rgb(255, 255, 255)',
        position: 'absolute',
        left: 16,
        paddingTop: 10
    }
})