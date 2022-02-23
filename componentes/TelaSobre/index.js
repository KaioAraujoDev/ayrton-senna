import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';

import FotoCapa from '../../assets/foto-capa.jpg';
import Preparacao from '../../assets/preparacao.png';
import ReidaChuva from '../../assets/rei-da-chuva.png';
import ReideMonaco from '../../assets/rei-de-monaco.png';
import Silvastone from '../../assets/silvastone.png';

import estilos from './estilos';

export default function TelaSobre() {
    return (
        <View style={estilos.containerMain}>
            <View style={estilos.container}>
                <Text style={estilos.titleMain}>Ayrton Senna</Text>
                <Image style={estilos.imageMain} source={FotoCapa} />
                <Text style={estilos.descricaoMain}>No esporte mais global e veloz do mundo , um piloto é considerado o mais rápido de todos os tempos:Ayrton Senna. Seus expressivos números ajudam a explicar porque o piloto ganhou status de mito do esporte. Mas Senna é mais do que isso: o brasileiro foi o responsável por alguns dos momentos mais mágicos da principal categoria do automobilismo mundial.</Text>
            </View>
            <ScrollView>
                <View style={estilos.card}>
                    <Image style={estilos.imageCard} source={ReidaChuva} />
                    <View style={estilos.containerCardText}>
                        <Text style={estilos.titleCard}>Rei da chuva</Text>
                        <Text style={estilos.descricaoCard}>Aprimorou a pilotagem no asfalto molhando e mostrou ser um piloto de determinação,garra e persistência.</Text>
                    </View>
                </View>
                <View style={estilos.card}>
                    <Image style={estilos.imageCard} source={ReideMonaco} />
                    <View style={estilos.containerCardText}>
                        <Text style={estilos.titleCard}>Rei de Mônaco</Text>
                        <Text style={estilos.descricaoCard}>Conquistou o posto por ser o maior recordista de vitórias com seis conquistas.</Text>
                    </View>
                </View>
                <View style={estilos.card}>
                    <Image style={estilos.imageCard} source={Silvastone} />
                    <View style={estilos.containerCardText}>
                        <Text style={estilos.titleCard}>Silvastone</Text>
                        <Text style={estilos.descricaoCard}>Por seu currículo impressionante em Silverstone, Ayrton recebeu o apelido de 'Silvastone' pela imprensa inglesa.</Text>
                    </View>
                </View>
                <View style={estilos.card}>
                    <Image style={estilos.imageCard} source={Preparacao} />
                    <View style={estilos.containerCardText}>
                        <Text style={estilos.titleCard}>Preparação</Text>
                        <Text style={estilos.descricaoCard}>Para Vencer corridas e campeonatos o piloto precisava ter uma preparação física de atleta.</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}