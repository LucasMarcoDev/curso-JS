function retornaHora(data){

    if(data &&!(data instanceof Date)){
        throw new TypeError('Esperando isntância de Date.');
    }     
    
    if(!data){
        data = new  Date();
    }

    return data.toLocaleTimeString('pt-BR', {

    })
    
}
n
const hora = retornaHora();
console.log(hora);



/*
try{
    // essa parte do código é executada quando não há erros

} catch(e){
    // É executada quando há erros

} finally{
    // será executado sempre. Mas podemos omitir quando  não quisermos que seja executado

}
    */