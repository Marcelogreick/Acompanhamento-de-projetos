import React from 'react'
import { View, ImageBackground } from 'react-native'

import icon from '../../assets/logolog.png'

import styles from './styles'

export default function Login() {

    return(
    <View style={styles.container}>
        <ImageBackground 
        source={icon}
        style={{width: '100%', height: '100%'}}
        >
        </ImageBackground>
    </View>
    )
}