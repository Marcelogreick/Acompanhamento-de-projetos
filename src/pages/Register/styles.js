import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#18486e'
    },

    header: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },

    headerText: {
        fontSize: 12,
        color: '#dae9ee',
        fontWeight: 'bold'
    },

    title: {
        fontSize: 20,
        marginBottom: 16,
        marginTop: 20,
        color: "#dae9ee"
    },

    registerList: {
        marginTop: 25,
    },

    register: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#dae9ee',
        marginBottom: 16
    },

    status: {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold'
    },

    statusProps: {
        marginTop: 1,
        fontSize: 14,
        marginBottom: 5,
        color: '#696969',
        fontWeight: 'bold'
    },

    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    detailsButton: {
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold'
    },

})