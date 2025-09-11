//Reduz o array a um unico elemento, nao muda o array original. Alem do  valor, indice e array reduce tem acumulador em sua funcao de callback que podemos defini-lo dentro da funçao callback se nao definirmos o acumulador ele usara o primeiro valor do array original

//SOme todos os numeros (reduce)
//Retorne um array com os pares (Filter)
//Retorne um array com o dobre dos valores (Map)


const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador,  valor, indice,array){
  acumulador += valor;
  return acumulador;
});
console.log(total);


//Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Lucas', idade:27},
    {nome: 'Maria', idade:60},
    {nome: 'Eduardo', idade:35},
    {nome: 'Leticia', idade:80},
    {nome: 'Rosane', idade:99},
    {nome: 'Wallace', idade:12},
];

const maisVelho = pessoas.reduce(function(acumulador,valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelho);