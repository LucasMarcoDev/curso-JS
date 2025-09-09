//funçao filter requer que retone um valor verdadeiro ou falso verdadeiro pra embutir o valor no array e false para quando nao quer embutir o valor no array
//funcao filter sempre ira retornar array com a mesma quantidade de elementos ou menos.
//Retorne os numeros maiores que 10 

/*
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
function callBackFilter(valor,){
    console.log(valor, )
    if (valor >10){
        return true;
    } else{
        return false;
    }
};

const numerosFiltrados = numeros.filter(callBackFilter);
console.log(numerosFiltrados);
*/

//Retorne o nome de pessoa com 5 letras ou mais
//retorne pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com a letra a
const pessoas = [
    {nome: 'Lucas', idade:27},
    {nome: 'Maria', idade:60},
    {nome: 'Eduardo', idade:35},
    {nome: 'Leticia', idade:80},
    {nome: 'Rosane', idade:99},
    {nome: 'Wallace', idade:12},
];

const pessoasComNomeGrande = pessoas.filter((obj)=>{
    return obj.nome.length >= 5
});
const pessoasComIdadeAlta = pessoas.filter(obj => obj.idade > 50)

const pessoasComLetraA = pessoas.filter((obj)=> {
    return obj.nome.toLowerCase().endsWith('a')
});
console.log(pessoasComIdadeAlta);
console.log(pessoasComIdadeAlta)
console.log(pessoasComNomeGrande);