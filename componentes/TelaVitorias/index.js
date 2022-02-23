import React from 'react';
import {Text,View,ScrollView,ImageBackground,Image} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';


import Corrida1 from '../../assets/corrida1.jpg';
import Vitoria1 from '../../assets/vitoria1.jpg';
import Vitoria2 from '../../assets/vitoria2.jpg';
import Vitoria3 from '../../assets/vitoria3.jpg';

import estilos from './estilos';

export default function TelaVitorias(){
    return(
        
        <ScrollView >
            <ImageBackground source={Corrida1}  style={estilos.container} blurRadius={2}>
                <View style={estilos.Card}>
                    <Text style={estilos.titleCard}>Senna em Números</Text>
                    <Text style={estilos.textCard}>Ele conquistou três campeonatos mundiais em 1988, 1990 e 1991 , e ganhou 41 grandes Prêmios e 65 pole positions.</Text>
                    <View style={estilos.divsCard}>
                        <FontAwesome5 name="trophy" size={25} color="#eecb01"/>
                        <Text style={estilos.spanDivCard}>161</Text>
                        <Text style={estilos.textDivCard}>GPS DISPUTADOS</Text>
                    </View>
                    <View style={estilos.divsCard}>
                        <FontAwesome5 name="trophy" size={25} color="#eecb01"/>
                        <Text style={estilos.spanDivCard}>65</Text>
                        <Text style={estilos.textDivCard}>POLE DISPUTADOS</Text>
                    </View>
                    <View style={estilos.divsCard}>
                        <FontAwesome5 name="trophy" size={25} color="#eecb01"/>
                        <Text style={estilos.spanDivCard}>41</Text>
                        <Text style={estilos.textDivCard}>VITÓRIAS</Text>
                    </View>
                    <View style={estilos.divsCard}>
                        <FontAwesome5 name="trophy" size={25} color="#eecb01"/>
                        <Text style={estilos.spanDivCard}>3X</Text>
                        <Text style={estilos.textDivCard}>CAMPEÃO MUNDIAL</Text>
                    </View>
                </View>
                <View style={estilos.cardImage}>
                    <Text style={estilos.titleCardImage}>Campeonato Mundial - 1988</Text>
                    <Image style={estilos.Image} source={Vitoria1}/>
                </View>
                <View style={estilos.cardImage}>
                    <Text style={estilos.titleCardImage}>Campeonato Mundial - 1990</Text>
                    <Image style={estilos.Image} source={Vitoria2}/>
                </View>
                <View style={estilos.cardImage}>
                    <Text style={estilos.titleCardImage}>Campeonato Mundial - 1991</Text>
                    <Image style={estilos.Image} source={Vitoria3}/>
                </View>
            </ImageBackground>
        </ScrollView>
    )
}