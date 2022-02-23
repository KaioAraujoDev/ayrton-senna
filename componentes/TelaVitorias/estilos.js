import {StyleSheet} from 'react-native';

const estilos = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        padding:20
    },
    Card:{
        backgroundColor:'rgba(0,0,0,0.6)',
        padding:20 ,
        width:300,
        marginBottom:50
    },
    titleCard:{
        textAlign:'center',
        fontSize:22,
        fontWeight:'bold',
        color:'#fff',
        marginBottom:10
    },
    textCard:{
        color:'#a6a6a6',
        marginBottom:15,
        textAlign:'center',
        fontSize:13,

    },
    divsCard:{
        flexDirection:'row',
        alignItems: 'center',
        marginBottom:10,
        width:'100%'
    },
    spanDivCard:{
        color:'#eecb01',
        fontWeight:'bold',
        fontSize:20,
        marginStart:10,
        marginEnd:5
    },
    textDivCard:{
        color:'#a6a6a6',
        fontSize:16,
    },
    cardImage:{
        backgroundColor:'rgba(0,0,0,0.6)',
        marginBottom:20,
       
    },
    titleCardImage:{
        textAlign:'center',
        color:'#fff',
        fontSize:16,
        padding:15,
    },
    Image:{
        width:300,
        height:200,
    }
})

export default estilos;