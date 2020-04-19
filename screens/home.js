import  React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from "react-redux";

export default function Home({ navigation, route }){

    const uid = route.params.uid;

    return(
        <View style={styles.container}>
            <Text>Welcome Home</Text>
            <Text>{ uid }</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});