// Escreva uma função chamada ePaisagem que
// Recebe dois argumentos, largura e altura
// de uma imagem (number).
//Retorne true se a imagem estuver no modo
//paisagem
/*
function ePaisagem(a,l){
    return a > l ?  false :  true
    
};
*/

const ePaisagem = (largura, altura) => largura > altura ? true : false
console.log(ePaisagem(200,1200));