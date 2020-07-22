import React from 'react'
import { View, ImageBackground,TextInput, Alert, TouchableOpacity, Text } from 'react-native'
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
                placeholder='Digite seu código aqui'
                style={styles.inputText}
            />

            <TouchableOpacity onPress = {() => Alert.alert('Hello')}>
                <View style={styles.buttonLogin}
                >
                <Text style={styles.textbutton}>Consultar</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => Alert.alert('Entre em contato com o suporte de novos aplicativo')}>
                <View>
                    <Text style={styles.info}>Não tenho código</Text>
                </View>
            </TouchableOpacity>
            
        </View>
        </ImageBackground>

    </View>
    )
}