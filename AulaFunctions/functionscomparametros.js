//arguments sustenta todos os argumentos enviados na funçao

function funcao (a,b = 2, c= 4){
    console.log(a + b + c);
}
funcao(2, undefined,9)