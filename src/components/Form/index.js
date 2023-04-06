import React, { useState } from 'react'
import { Text,TextInput, View, TouchableOpacity,Vibration, Pressable, Keyboard, FlatList } from 'react-native'
import ResultImc from './ResultImc'
import styles
 from './style'
export default function Form(){
const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [messageIMC, setMessageImc] = useState("Preencha o peso e altura")
const [imc, setImc] = useState(null)
const [textButton, setTextButton] = useState("Calcular")
const [errorMessage, setErrorMessage] = useState(null)
const [imcList, setImcList] = useState([])
const [classificacao, setClassificacao ] = useState([])
const [thinOrFat, setThinOrFat] = useState(null)


function imcCalculator(){
    let heightFormat = height.replace(",",".")
    let totalImc = (weight/(heightFormat*heightFormat)).toFixed(2)
    let thinfat = null
    setThinOrFat(null)
    if(totalImc > 0 && totalImc <= 18.5){
        //setThinOrFat("Baixo Peso !")
        thinfat = "Baixo Peso"
    }else if(totalImc > 18.5 && totalImc <= 24.99){
        //setThinOrFat("Intervalo Normal!")
        thinfat = "Peso Normal!"
    }else if(totalImc > 24.99 && totalImc <= 29.99){
        //setThinOrFat("Sobrepeso!")
        thinfat = "Sobrepeso!"
    }else if(totalImc > 29.99 && totalImc <= 34.99){
        //setThinOrFat("Obesidade Classe 1!")
        thinfat = "Obesidade Classe 1!"
    }else if(totalImc > 34.99 && totalImc <= 39.99){
        //setThinOrFat("Obesidade Classe 2!")
        thinfat = "Obesidade Classe 2!"
    }else if(totalImc > 39.99){
        //setThinOrFat("Obesidade Classe 3!")
        thinfat = "Obesidade Classe 3!"
    }else {
        //setThinOrFat("Impreciso!")
        thinfat = "Impreciso"
    }

    setThinOrFat(thinfat)
    setImcList((arr)=> [...arr,{id: new Date().getTime(),imc:totalImc,classificacao:thinfat }])
    setImc(totalImc)
}

function verificationImc(){
    if(imc == null ){
        Vibration.vibrate();
        setErrorMessage('Campo obrigatório*')
    }
}

function validationImc(){
    if(weight != null && height != null){
        setImc(null)
        setMessageImc(null)
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setTextButton("Calcular Novamente")
        setMessageImc("Seu IMC é:")
        setErrorMessage(null)
    }
    else{
        verificationImc()
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e altura")
    } 
}

    return(
        <View style={styles.formContext}>
            {imc == null ? 
            <Pressable onPress={Keyboard.dismiss} style={styles.form }>
                <Text style={ styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={ setHeight }
                    value={ height }
                    placeholder='Ex. 1.75'
                    keyboardType='numeric'
                />
                <Text style={ styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={ setWeight }
                    value= {weight }
                    placeholder='Ex. 60.5'
                    keyboardType='numeric'
                />
                <TouchableOpacity
                    style={styles.ButtonCalculator}
                    onPress={() => validationImc()}
                >
                    <Text style={styles.textButtonCalculator}>{ textButton }</Text>
                </TouchableOpacity>
                </Pressable>
                : 
                <View style={ styles.exibitionResultImc }>
                    <ResultImc messageResultImc = {messageIMC} resultImc = {imc} mostrarClassificacao = { thinOrFat } />
                    <TouchableOpacity
                        style={styles.ButtonCalculator}
                        onPress={() => validationImc()}
                    >
                        <Text style={styles.textButtonCalculator}>{ textButton }</Text>
                    </TouchableOpacity>
                </View>
                }
                <FlatList 
                    showsVerticalScrollIndicator = {false}
                    style={styles.listImcs}
                    data = { imcList.reverse() }
                    renderItem={({item}) => {
                    return(
                        <Text style={styles.resultImcItem}>
                            <Text style={styles.textResultItemList}>Seu IMC é: </Text>
                            { item.imc }
                            <Text style={styles.textResultItemList}> e está com: </Text>
                            { item.classificacao }
                        </Text>
                    )
                }}
                keyExtractor={(item) => item.id}
                />
            </View>
    )
}