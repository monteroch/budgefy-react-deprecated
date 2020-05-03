import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Animated, Easing  } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function Select(){

    const [ status, setStatus ] = useState(false);
    const [ select, setSelect ] = useState(false);
    // let heightValue = new Animated.Value(1); // declare an animated value [1]
    const heightValue = useState(new Animated.Value(0))[0];

    const toogleAnimation = () => {
        console.log(select);
        if(!select){
            Animated.timing(heightValue, {
                toValue: 80,
                duration: 1000,
            }).start(() => setSelect(true));
        }else{
            Animated.timing(heightValue, {
                toValue: 0,
                duration: 1000,
            }).start();
            setSelect(false);
        }
    };

    const animatedStyle = {
        height: heightValue
    };

    return(
        <TouchableHighlight style={styles.touchContainer} onPress={toogleAnimation}>
            <View style={styles.selectContainer}>
                <View style={styles.selectIconContainer}>
                    <SimpleLineIcons name='arrow-down' size={22} style={styles.arrowIcon}/>
                </View>
                <Animated.View style={styles.selectContentContainer}>
                    <View>
                        <Text style={styles.placeholder}>Select an option</Text>
                    </View>
                    <Animated.View style={[styles.selectOptionsContainer, animatedStyle]}>
                        {
                            (select)?(
                                <View>
                                    <Text style={styles.placeholder}>Option 1</Text>
                                    <Text style={styles.placeholder}>Option 2</Text>
                                </View>
                            ):(
                                null
                            )
                        }
                    </Animated.View>
                </Animated.View>
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
        width: '98%',
        backgroundColor: '#fff0e8'
    },
    selectIconContainer:{
        backgroundColor: '#ceeeff',
        borderRightWidth: 1,
        width: '13%'
    },
    selectContentContainer: {
        justifyContent: 'center',
        backgroundColor: '#b5ffce',
        width: '87%',
        padding: 5,
    },
    selectOptionsContainer: {
        height: 0
    },
    arrowIcon: {
        color: 'rgb(0, 0, 0)',
        fontSize: 22,
        padding: 7
    },
    placeholder: {
        fontSize: 14
    },
    selectItem:{
        fontSize: 14,
        height: 40
    }
});

//https://reactnativecode.com/increase-width-height-of-view-using-animation/