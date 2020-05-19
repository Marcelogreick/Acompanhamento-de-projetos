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

    register: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#dae9ee',
        marginBottom: 16,
        marginTop: 50
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
})