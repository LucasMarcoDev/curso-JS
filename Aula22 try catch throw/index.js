function soma( x,y){
    if(typeof x !== 'number' || typeof y !== 'number')
    {
        throw new Error('x e y precisam ser números');
    }
    return x + y;
}
try{
console.log(soma(1,2));
console.lol(soma('1', 20));
}catch(e){
  //  console.log(e);
  console.log('Algums coisa mais amigavel para o usuario')
}
/*
function soma( x,y){
    if(typeof x !== 'number' || typeof y !== 'number')
    {
        throw('x e y precisam ser números');
    }
    return x + y;
}

console.log(soma(1,2));
console.lol(soma('1', 20));

*/
/*
try{
    console.log(p);
} catch(e){
    console.log('Não existe a variavel.');
    console.log(p)
}
    */