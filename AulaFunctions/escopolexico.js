/* Escopo lexico e o tipo de escopo de uma funçao em que a mesma 'lembra' onde foi declarada
e tambem sabe onde estao os escopos vizinhos e o que foi declarado dentro deles sendo assim
podemos buscar uma variavel, array,etc. Usando o escopo lexico para nossa funçao
*/

const nome = 'Lucas';
function falaNome(){
    console.log(nome)
}

function usaFalaNome(){
    falaNome();
}

usaFalaNome();