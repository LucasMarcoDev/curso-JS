//For in -> lê os índices ou chaves do objeto

const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Marco',
    idade: 27,
}

for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
}

//forma de acessar dado do objeto console.log(pessoa.nome); 

 // Outra forma de acessar dado de um objeto, jeito parecido com o de acessar dados de uma arrayconsole.log(pessoa['nome']);
/*
    for (let i in pessoa){
        console.log(i);
    }
*/

/*
for(let i in frutas){
    console.log(frutas[i]);
}
*/
/*
for ( let i = 0; i < frutas.length; i ++){
    console.log(frutas[i])
}
*/

