//atribuiçao via dessestruturaçao (objetos)

const pessoa = {
    //nome: 'Lucas',
    sobreNome: 'Marco',
    idade: 27,
    endereco: {
        rua: 'Castro',
        numero: 208
    }

}

// Atribuiçao via dessestruturaçao
const {nome = 'ola', idade} = pessoa;
console.log(nome, idade);
 