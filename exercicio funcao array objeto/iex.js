const pessoas = [];

const obetos= {
    nome: ' lucas',
    sobrenome: 'Marco',
    peso: 90,
    altura:1.68,
}
pessoas.unshift(obetos.nome)
pessoas.unshift(obetos.sobrenome)
pessoas.unshift(obetos.peso)
pessoas.unshift(obetos.altura)

function imprimi(){
    console.log(pessoas)
}

imprimi();