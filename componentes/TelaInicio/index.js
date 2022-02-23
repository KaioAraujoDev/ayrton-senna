import React from 'react';
import {Text,ImageBackground,Image,View} from 'react-native';

import FotoCapa from '../../assets/foto-capa.jpg';
import Fundo from '../../assets/fundo.jpg';

import estilos from './estilos';

export default function TelaInicio(){
    return(
        <ImageBackground source={Fundo} style={estilos.container} blurRadius={5}>
            <Image style={estilos.imagemCapa}source={FotoCapa}/>
            <View style={estilos.card}>
                <Text style={estilos.title}>Ayrton Senna</Text>
                <Text style={estilos.descricao}>Através desse APP, você vai conhecer um pouco sobre quem foi esse grande piloto.</Text>
            </View>
        </ImageBackground>
    )
}