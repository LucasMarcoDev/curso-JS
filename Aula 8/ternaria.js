// operaçao ternaria e uma especie simplificada de if e else, onde (?) e o se verdadeiro e (:) funciona como else falso

const nivel = 1000;
const pontN = nivel >= 1000 ? 'Usuario VIP' : 'Usuario comum';
console.log(pontN)

const num = 90
const verifica = 45 +1 >= num ? `numero maior que ${num}` : `numero menor que ${num}`;
console.log(verifica);

let cor = 'azul'
let cheque = cor === 'marron' ? `e uma cor muito bonita` : `escolha interessante de cor`
console.log(cheque)