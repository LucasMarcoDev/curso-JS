//               -5      -4       -3         -2         -1       Negativos
//                0        1       2         3          4
const nomes = ['maria', 'joao', 'eduardo', 'gabriel', 'julia'];

const removidos = nomes.splice(nomes.length,0,'Luiz')
console.log(nomes, removidos);

//nomes.splice(indice, delete, elem1, elem2, elem3);
//pop remove o ultimo elemento
//const removidos = nomes.splice(-1, 1);

//shift remove o primeiro elemento
//const removidos = nomes.splice(0,1)

//push adiciona um elemento no final do array
//nomes.splice(nomes.length, 0, 'Luiz')

//unshift adiciona um elemento no começo do array
//const removidos = nomes.splice(0, 0, 'Luiz', 'Lucas')


