import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext:{
        width:'100%', // define a largura como 100%
        height:'100%', // define a altura como 100%
        backgroundColor:'#fff', // define o fundo como branco
        alignItems:'center', // centraliza os itens horizontalmente
        paddingTop:20, // adiciona preenchimento superior de 20 unidades
        borderTopLeftRadius:30, // define um raio de borda superior esquerda de 30 unidades
        borderTopRightRadius:30 // define um raio de borda superior direita de 30 unidades
    },
    form:{
        width:'100%', // define a largura como 100%
        height:'auto', // define a altura como automática
        marginTop:10, // adiciona margem superior de 10 unidades
        padding: 10, // adiciona preenchimento de 10 unidades
    },
    formLabel:{
        color:'#000', // define a cor do texto como preto
        fontSize:18, // define o tamanho da fonte como 18 unidades
        paddingLeft:20, // adiciona preenchimento à esquerda de 20 unidades
    },
    input:{
        width:'90%', // define a largura como 90%
        borderRadius:50, // define o raio de borda como 50 unidades
        backgroundColor:'#f6f6f6', // define o fundo como cinza claro
        height:40, // define a altura como 40 unidades
        margin:12, // adiciona margem de 12 unidades
        paddingLeft:10, // adiciona preenchimento à esquerda de 10 unidades
    },
    ButtonCalculator:{
        borderRadius:50, // define o raio de borda como 50 unidades
        alignItems:'center', // centraliza os itens horizontalmente
        justifyContent:'center', // centraliza os itens verticalmente
        width:'90%', // define a largura como 90%
        backgroundColor:'#ff0043', // define o fundo como vermelho
        paddingTop:14, // adiciona preenchimento superior de 14 unidades
        paddingBottom:14, // adiciona preenchimento inferior de 14 unidades
        marginLeft:12, // adiciona margem à esquerda de 12 unidades
        marginTop:30 // adiciona margem superior de 30 unidades
    },
    textButtonCalculator:{
        fontSize:20, // define o tamanho da fonte como 20 unidades
        color:'#fff', // define a cor do texto como branco
    },
    errorMessage:{
        fontSize:12, // define o tamanho da fonte como 12 unidades
        color:'red', // define a cor do texto como vermelho
        fontWeight:'bold', // define o peso da fonte como negrito
        paddingLeft:20 // adiciona preenchimento à esquerda de 20 unidades
    },
    exibitionResultImc:{
        width:'100%', // define a largura como 100%
        height: '50%' // define a altura como 50%
    },
    listImcs:{
        marginTop:20, // adiciona margem superior de 20 unidades
    },
    resultImcItem:{
        fontSize:20, // define o tamanho da fonte como 20 unidades
        color:'red', // define a cor do texto como vermelho
        height:50, // define a altura como 50 unidades
        width:'100%', // define a largura como 100%
        paddingRight:20 // adiciona preenchimento à direita de 20 unidades
    },
    textResultItemList:{
        fontSize: 16, // define o tamanho da fonte como 16 unidades
        color:'red', // define a cor do texto como vermelho
    }
})
    export default styles; // exporta os estilos para serem usados em outros componentes