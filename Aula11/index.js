// ... rest, ... spread atribuiçao por dessestruturaçao
/*
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90,];
const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero, terceiroNumero, );
console.log(resto);
*/

const numeros = [[1, 2, 3], [1, 2, 3], [4, 2, 3] ];
const [,[, ,tres]] = numeros;
console.log(tres)



//console.log(numeros[2][2]);