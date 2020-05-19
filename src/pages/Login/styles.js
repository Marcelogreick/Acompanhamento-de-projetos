import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'


export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        paddingTop: Constants.statusBarHeight + 1,
        backgroundColor: '#18486e'
    },

    icon: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },

})