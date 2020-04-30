import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function Select(){

    const [ status, setStatus ] = useState(false);

    return(
        <TouchableHighlight style={styles.touchContainer} onPress={() => setStatus(!status)}>
            <View style={styles.selectContainer}>
                <SimpleLineIcons name='arrow-down' size={22} style={styles.arrowIcon}/>
                <View style={styles.selectContent}>
                    {
                        (status) ? (
                            <View>
                                <Text style={styles.selectItem}>Option 1</Text>
                                <Text style={styles.selectItem}>Option 2</Text>
                                <Text style={styles.selectItem}>Option 3</Text>
                            </View>
                        ):(
                            <Text style={styles.placeholder}>Select an option</Text>
                        )
                    }
                    <View>
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    )
};

const styles = StyleSheet.create({
    touchContainer:{
        width: '100%'
    },  
    selectContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        width: '100%'
    },
    arrowIcon: {
        color: 'rgb(0, 0, 0)',
        fontSize: 22,
        marginRight: 10,
        borderRightWidth: 1,
        padding: 9
    },
    selectContent: {
        justifyContent: 'center'
    },
    placeholder: {
        fontSize: 14
    },
    selectItem:{
        fontSize: 14,
        height: 40
    }
});
