import React from 'react'
import { View, ImageBackground } from 'react-native'
import { TextInput } from 'react-native';
import Icon2 from 'react-native-vector-icons/FontAwesome';

import icon from '../../assets/logolog.png'

import styles from './styles'

export default function Login() {

    return(
    <View style={styles.container}>
        <ImageBackground 
        source={icon}
        style={{width: '100%', height: '100%'}}
        >
        
        <View style={styles.input}>
            <TextInput
                placeholder='Ceara'
                style={styles.inputText}
            />
        </View>
        </ImageBackground>

    </View>
    )
}