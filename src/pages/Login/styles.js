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
        flexDirection: 'column',
    },

    inputText: {
        height: 40, 
        borderColor: '#000', 
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        maxWidth: 300
    }

})