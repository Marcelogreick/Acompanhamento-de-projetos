import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'


export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight + 1,
    },

    icon: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },

    input: {
        marginTop: 300,
        alignItems: 'center',
    },

    inputText: {
        height: 40, 
        borderColor: '#000', 
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#fff',
        width: 300,
        marginBottom: 10,
        paddingLeft: 12,
        fontSize: 18,
        fontFamily: 'Roboto'
    },

    buttonLogin: {
        height: 40,
        width: 300,
        backgroundColor: '#18486e',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: '#000',
        borderWidth: 1,
        fontSize: 18,
        fontFamily: 'Roboto'        
    },

    textbutton: {
        color: 'white', 
        fontSize: 18, 
        fontFamily: 'Roboto'
    },

    info: {
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
        paddingTop: 10
    },

})