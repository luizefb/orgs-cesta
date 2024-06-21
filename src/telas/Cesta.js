import React from 'react';
import { Image, StyleSheet, Dimensions, Text } from 'react-native';

import topo from '../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <>
    <Image source={topo} style={estilos.topo} />
    <Text style={estilos.titulo}>Detalhes da cesta</Text>
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
    }
});