/*
Objeto date nos permite manipular as datas e conseguir extrair
Ano, Mes,Dia,Hora,Minuto,Segundo,Milisegundo.
para usarmos precisamos primeiro declarar uma variavel com new date() e 
depois conseguimos manipular a data e pegar ela

*/

let data = new Date();
let dia = data.getDay();
let mes = data.getMonth();
let ano = data.getFullYear();
let minutos = data.getMinutes();
let segundos = data.getSeconds();
let milisegundos = data.getMilliseconds();
console.log(mes)