import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

import logofb from '../../assets/logo.png'

import styles from './styles'


export default function Detail() {
    const navigation = useNavigation()
    
    function navigateToBack() {
        navigation.navigate('Register')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigateToBack}>
                    <Feather name="arrow-left" size={28} color="#dae9ee" />
                </TouchableOpacity>

                <Image source={logofb} />
            </View>

            <View style={styles.register}>
            <ScrollView>
                <Text style={styles.status}>Status: </Text>
                <Text style={styles.statusProps}>Produção de Funcionalidades</Text>

                <Text style={styles.status}>Data:</Text>
                <Text style={styles.statusProps}>30/10/2020</Text>

                <Text style={styles.status}>Descrição:</Text>
                <Text style={styles.statusProps}>
                Gates nasceu em uma família de classe média de Seattle. 
                Seu pai, William H. Gates, era advogado de grandes empresas, 
                e sua mãe, Mary Maxwell Gates, foi professora da Universidade 
                de Washington e diretora de bancos. Bill Gates e as suas duas 
                irmãs, Kristanne e Libby, frequentaram as melhores escolas 
                particulares de sua cidade natal, e Bill também participou do 
                Movimento Escoteiro ainda quando jovem. Bill Gates, 
                foi admitido na prestigiosa Universidade Harvard, conseguindo 
                1590 SATs dos 1600 possíveis mas abandonou os cursos de 
                Matemática e Direito no terceiro ano,para dedicar-se à Microsoft.

                Gates nasceu em uma família de classe média de Seattle. 
                Seu pai, William H. Gates, era advogado de grandes empresas, 
                e sua mãe, Mary Maxwell Gates, foi professora da Universidade 
                de Washington e diretora de bancos. Bill Gates e as suas duas 
                irmãs, Kristanne e Libby, frequentaram as melhores escolas 
                particulares de sua cidade natal, e Bill também participou do 
                Movimento Escoteiro ainda quando jovem. Bill Gates, 
                foi admitido na prestigiosa Universidade Harvard, conseguindo 
                1590 SATs dos 1600 possíveis mas abandonou os cursos de 
                Matemática e Direito no terceiro ano,para dedicar-se à Microsoft.

                Gates nasceu em uma família de classe média de Seattle. 
                Seu pai, William H. Gates, era advogado de grandes empresas, 
                e sua mãe, Mary Maxwell Gates, foi professora da Universidade 
                de Washington e diretora de bancos. Bill Gates e as suas duas 
                irmãs, Kristanne e Libby, frequentaram as melhores escolas 
                particulares de sua cidade natal, e Bill também participou do 
                Movimento Escoteiro ainda quando jovem. Bill Gates, 
                foi admitido na prestigiosa Universidade Harvard, conseguindo 
                1590 SATs dos 1600 possíveis mas abandonou os cursos de 
                Matemática e Direito no terceiro ano,para dedicar-se à Microsoft.
                </Text>
                </ScrollView>
            </View>
        </View>
    )
}