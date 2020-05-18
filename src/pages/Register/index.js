import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'

import logoFb from '../../assets/logo.png'

import styles from './styles'

export default function Register() {
    const navigation = useNavigation()

    function navigateToDetail() {
        navigation.navigate('Detail')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoFb} />
                <Text style={styles.headerText}>FB10101010704</Text>
            </View>

            <Text style={styles.title}>Bem Vindo! Moby Car</Text>

            <FlatList
                data={[1, 2, 3, 4, 5]}
                style={styles.registerList}
                keyExtractor={register => String(register)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={styles.register}>
                        <Text style={styles.status}>Status: </Text>
                        <Text style={styles.statusProps}>Produção de Funcionalidades</Text>

                        <Text style={styles.status}>Data:</Text>
                        <Text style={styles.statusProps}>30/10/2020</Text>

                        <TouchableOpacity 
                            style={styles.details} 
                            onPress={navigateToDetail}
                        >
                            <Text style={styles.detailsButton}>Ver mais detalhes</Text>
                             <Feather name="arrow-right" size={16} color="#E02041"/>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}