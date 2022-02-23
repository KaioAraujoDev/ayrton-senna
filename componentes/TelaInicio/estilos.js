import {StyleSheet} from 'react-native';

const estilos = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:20,
    },
    imagemCapa:{
        height:250,
        width:250,
        borderRadius:125,
        borderWidth:3,
        borderColor:'#202020',
        marginBottom:50
    },
    card:{
        padding:20,
        backgroundColor:'rgba(0,0,0,0.9)',
        width:340,
        borderRadius:20,
    },
    title:{
        color:'#fff',
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:10
    },
    descricao:{
        color:'#a6a6a6',
        fontSize:16,
        alignItems:'center'
    }
})

export default estilos;