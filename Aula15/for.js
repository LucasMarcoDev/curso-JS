/*
For classico estrutura: for(let i = 0; i <= 5;  i++){}
e necessario primeiro criar uma variavel de controle  dentro dos parenteses e setar um valor inicial
segunda coisa criar uma condiçao parar e por fim incrementar ou decrementar a variavel
o laço for sera executado ate que a condiçao seja avaliada como falsa no caso do exemplo ate a condicao
ser maior ou igual a 5. lembrar sempre de usar ponto e virgula(;) durante os passos do for dentro dos parenteses
*/
 // i - index


const frutas = ['maça', 'pera', 'Uva'];
for (let i = 0; i < frutas.length; i++){
    console.log(`indice ${i}`, frutas[i]);
}

 /*
 for ( let i = 0; i <= 10; i++){
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i,par);
 }
*/