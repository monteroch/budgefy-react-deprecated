import React from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function CustomModal({ modalStatus, setModalStatus, title, children, fixed}){
    return(
        <Modal visible={modalStatus} animationType='slide' transparent={true}>
            <View style={fixed ? styles.outterContainerFixed : styles.outterContainer}>
                <View style={styles.innerContainer}>
                    <View style={styles.modalTitleBar}>
                        <Text style={styles.title}>{ title }</Text>
                        <MaterialIcons name='close' size={24} onPress={() => setModalStatus(false)} style={styles.closeIcon}/>
                    </View>
                    <View style={styles.modalBody}>
                        {children}
                    </View>
                </View>
            </View>
        </Modal>
    )
};


const styles = StyleSheet.create({
    outterContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    outterContainerFixed: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        alignItems: 'center',
        height: '100%',
        paddingTop: '25%'
    },
    innerContainer: {
        backgroundColor: 'rgb(255, 255, 255)',
        width: '80%',
        padding: 20,
        borderRadius: 10
    },
    modalTitleBar: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        flex: 1,
        textAlign: 'center'
    },
    closeIcon: {
        marginLeft: 'auto'
    },
    modalBody: {
        marginTop: 40
    }
});