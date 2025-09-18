/*
Javascript  e baseado em prototipos para passar propriedades e metodos de um bojeto para o outro

Definiçao de prototipo
prototipo e o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo
ou molde para futuras produçoes

todos os objetos tem uma referencia interna para um prototipo (__proto__) que vem da propriedade
prototype da funçao construtora que foi usada para cria-lo. Quando tentamos acessar um membro
de um objeto, primeiro o motor do JS vai tentar encontrar este membro do proprio objeto e depois
a cadeia de prototipos e usada ate o topo (null) ate encontrar (ou nao) tal membro.
*/

//prototype
//Construtora -> molde (classe)
function Pessoa (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto =() => 'Original: ' +  this.nome + ' ' + this.sobrenome;

}

Pessoa.prototype.nomeCompleto = function(){         // passando um metodo para outro objeto atraves de prototype
    return this.nome + ' ' + this.sobrenome;
}

// Pessoa.prototype === pessoa1.__proto__

// instancia
const pessoa1 = new Pessoa(' Lucas', 'M.'); // <- Pessoa = Funçao construtora
const pessoa2 = new Pessoa ('Renata', + 'B. '); // <- Pessoa = Funçao cosntrutora

console.dir(pessoa1);
console.dir(pessoa2);