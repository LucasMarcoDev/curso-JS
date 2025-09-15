//Aula de objeto revisao de objetos

// const pessoa = {
//     nome: 'Lucas',
//     sobrenome: 'Marco',
// };
// console.log(pessoa.nome);
// console.log(pessoa['sobrenome']); //notaçao de colchete pra acessar valor do objeto

// const pessoa1 = new Object(); //objeto construtor
// pessoa1.nome = 'Luiz';
// pessoa1.sobrenome = 'Otavio';
// pessoa1.idade = 27
// pessoa1.falarNome= function(){
//     return(`${this.nome} esta falando seu nome.`)
// };

// pessoa1.getDataNascimento = function() {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// };
// delete pessoa1.nome;   //Deletar chave de um objeto

// for (let chave in pessoa1) {
//     console.log(pessoa1[chave]);
// }


//Factory functions / Constructor functions / Classes


// function criaPessoa(nome,sobrenome){     Exemplo de factory function
//     return{
//         nome,
//         sobrenome,
//         nomeCompleto(){
//             return `${this.nome}  ${this.sobrenome}`;
//         }
//     };
// }

// const p1 = criaPessoa('Luiz', 'Otavio');
// console.log(p1.nomeCompleto())
//Palavra freeze congela um valor, faz com que ele nao possa ser alterado.   Object.freeze(Pessoa1)

function Pessoa (nome,sobrenome){          //Exemplo de funçao construtora
    this.nome = nome;
    this.sobrenome = sobrenome;
}



const p1 = new Pessoa('Luiz', 'Miranda');
console.log(p1);
