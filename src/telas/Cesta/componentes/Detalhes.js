import React from "react";
import { View, Image, StyleSheet } from 'react-native';

import Texto from '../../../componentes/Texto';
import logo from '../../../../assets/logo.png';

export default function Detalhes() {
    return <>
        <Texto style={estilos.nome}>Cesta de Verduras</Texto>
        <View style={estilos.fazenda}>
            <Image source={logo} style={estilos.imagemFazenda}/>
            <Texto style={estilos.nomeFazenda}>Fazendas Schrute</Texto>
        </View>
        <Texto style={estilos.descricao}>
            Uma cesta com produtos selecionados com 
            excelente qualidade, colhidos por Mose Schrute. 
        </Texto>
        <Texto style={estilos.preco}>R$ 40,00</Texto>
    </>
}

const estilos = StyleSheet.create({
    nome: {
        fontSize: 26,
        lineHeight:42,
        color: "#464646",
        fontWeight: "bold",
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