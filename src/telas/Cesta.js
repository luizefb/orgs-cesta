import React from 'react';
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';

import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <>
    <Image source={topo} style={estilos.topo} />
    <Text style={estilos.titulo}>Detalhes da cesta</Text>

    <View style={estilos.cesta}>
        <Text style={estilos.nome}>Cesta de Verduras</Text>
        <View style={estilos.fazenda}>
            <Image source={logo} style={estilos.imagemFazenda}/>
            <Text style={estilos.nomeFazenda}>Fazendas Schrute</Text>
        </View>
        <Text style={estilos.descricao}>
            Uma cesta com produtos selecionados com 
            excelente qualidade, colhidos por Mose Schrute.
        </Text>
        <Text style={estilos.preco}>R$ 40,00</Text>
    </View>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width, //Essa conta é para saber a altura exata, largura dividido pelo comprimento da img, vezes widht que é o tamanho da tela.
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 18,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16,
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome: {
        fontSize: 26,
        lineHeight:42,
        color: "#464646",
        fontWeight: "bold"
    },
    fazenda: {
        flexDirection: "row", //é o que faz o view ficar como colunas e rows
        paddingVertical: 12
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight:26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
});