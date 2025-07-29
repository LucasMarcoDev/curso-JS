// Escreva uma função que recebe um número e 
// Retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número
// Use a função com  números de 0 a 100

function retornaNumero(a){
    if(typeof a !== 'number' ) return a;
    if (a % 5 === 0 && a % 3 ===0) return 'FizzBuzz';
    if (a % 3 === 0) return 'Fizz';
    if (a % 5 === 0) return 'Buzz';
    
    return a
};

console.log('a', retornaNumero('a'))
for (let i = 0; i <= 100; i++){
    console.log(i, retornaNumero(i))
}