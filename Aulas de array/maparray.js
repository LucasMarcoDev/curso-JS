//map e uma funçao extremamente parecida com filter o que muda que o retorno final vc pode mudar os valores de array filter nao faz isso!, ele nao muda o valor original do array e sim o do array usada em map e map sempre retornara um array do mesmo tamanho do array original

 const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
 const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro)
 

//para cada elemento
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave 'nome' do objeto
//Adicione uma chave id em cada objeto
const pessoas = [
    {nome: 'Lucas', idade:27},
    {nome: 'Maria', idade:60},
    {nome: 'Eduardo', idade:35},
    {nome: 'Leticia', idade:80},
    {nome: 'Rosane', idade:99},
    {nome: 'Wallace', idade:12},
];

const nomes = pessoas.map(valor=> valor.nome)
console.log(nomes)

const nomeRemov = pessoas.map(function(valor){
  delete valor.nome
  return valor; 
})

const comIds = pessoas.map(function(obj, indice){
   obj.id = (indice + 1);
   return obj;
});
console.log(comIds)
console.log(nomeRemov)