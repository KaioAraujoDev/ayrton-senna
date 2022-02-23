import {StyleSheet} from 'react-native';

const estilos = StyleSheet.create({
    containerMain:{
        flex:1,
        padding:20,
    },
    
    titleMain:{
        fontSize:22,
        fontWeight:'bold',
        marginBottom:10
    },
    imageMain:{
        borderRadius:5,
        height:200,
        marginBottom:10,
        width:'100%'
    },
    descricaoMain:{
        color:'#757575',
        fontWeight:'bold',
        marginBottom:20
    },
    card:{
        flexDirection:'row',
        marginBottom:20,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:'#d5d5d5'
    },
    containerCardText:{
        padding:10,
        flex:1
    },
    titleCard:{
        fontSize:18,
        fontWeight:'bold'
    },
    descricaoCard:{
        color:'#757575',
    },
    imageCard:{
        width:100,
        height:100,
    }
})

export default estilos;