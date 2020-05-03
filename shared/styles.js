import { StyleSheet } from 'react-native';

export const global = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282b3a',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: '40%',
        resizeMode: 'contain',
        maxHeight: 190,
        marginBottom: 30
    },
    inputContainer: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    formInput: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.2)',
        width: '85%',
        height: 35,
        color: '#fff'
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.5)',
        marginRight: 20,
    },
    button: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        marginVertical: 20,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.5)'
    },
    buttonText: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 13
    },
    bottomLegend: {
        color: 'rgba(255, 255, 255, 0.5)'
    },
    boldText: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontWeight: 'bold'
    },
    centerItems: {
        alignItems: 'center',
        margin: 10
    },
    textMainColor: {
        color: 'rgb(255, 255, 255)'
    },
    modalFormContainer: {
    },
    modalInputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    modalFormIcon: {
        color: 'rgb(0, 0, 0)',
        fontSize: 25,
        marginRight: 10
    },
    modalTextInput: {
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        height: 40,
        width: '85%',
        padding: 5,
        paddingLeft: 9
    },
    modalButton:{
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        marginVertical: 10,
        backgroundColor: 'rgb(102,125,142)',
        alignSelf: 'center'
    },
    modalButtonText: {
        color: 'rgb(255, 255, 255)',
        fontSize: 13
    }
});