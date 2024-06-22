import logo from '../../assets/logo.png';
import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import abobora from '../../assets/frutas/Abóbora.png';
import pepino from '../../assets/frutas/Pepino.png';

const cesta = {
    topo: {
        titulo: "Detalhes da cesta",
    },
    detalhes: {
        nome: "Cesta de Verduras",
        logoFazenda: logo,
        nomeFazenda: "Fazendas Schrute",
        descricao: "Uma cesta com produtos selecionados com excelente qualidade, colhidos por Mose Schrute.",
        preco: "R$ 26,98",
        botao: "Comprar",
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
            {
                nome: "Tomate",
                imagem: tomate,
            },
            {
                nome: "Brócolis",
                imagem: brocolis,
            },
            {
                nome: "Batata",
                imagem: batata,
            },
            {
                nome: "Pepino",
                imagem: pepino,
            },
            {
                nome: "Abóbora",
                imagem: abobora,
            },
        ]
    },
}

export default cesta;