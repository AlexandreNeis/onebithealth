import React from 'react'
import { View, Text, TouchableOpacity,Share } from 'react-native'
import styles from './style'

export default function ResultImc(props){
    const onShare = async () => {
        const result = await Share.share({
            message: "Meu IMC hoje é: " + props.resultImc + " e minha classificação é: " + props.mostrarClassificacao
        })
    }
    return(
        <View style={styles.resImc}>
            <View style={styles.boxSharedButton}>
                <Text style={ styles.information }>{ props.messageResultImc }</Text>
                <Text style={ styles.numberImc}>{ props.resultImc }</Text>
                <Text style={styles.information}>{ props.mostrarClassificacao }</Text>
                <TouchableOpacity 
                    onPress={onShare}
                    style={styles.shared}>
                        <Text style={styles.sharedText}>Compartilhar</Text>
                </TouchableOpacity> 
            </View>

        </View>
    )
}