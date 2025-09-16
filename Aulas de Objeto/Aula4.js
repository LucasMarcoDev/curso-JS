/*Metodos uteis para objetos
objec.values (retorna os valores do objeto)
object.entries (retorna valores e chaves do objeto  em forma de array)
objec.assaign (des, any) copia objeto
object.getOwnPropertyDescriptor (o, "prop")
...  (spread) espalha os valores do objeto

// Ja vimos
object.keys (retorna as chaves)
object.freeze (congela o objeto)
object.defineProperties (Define varias propriedades do objeto)
Object.defineProperty (define uma propriedade)
*/

const produto ={ nome: 'caneca', preco: 1.8};
console.log(Object.values(produto));
