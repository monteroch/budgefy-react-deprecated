import  React, {useState} from 'react';
import { View, Text, StyleSheet, ImageBackground  } from 'react-native';
import { useSelector, useDispatch } from "react-redux";

export default function Home({ navigation, route }){

    const uid = route.params.uid;

    return(
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/bg2.jpg')} style={styles.bgImage} blurRadius={2}>
                <Text>Welcome Home</Text>
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
    }
});