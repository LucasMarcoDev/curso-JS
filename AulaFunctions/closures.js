/* Closure esta muito relacionado ao escopo lexico
Closure e a ahabilidade da funçao em acessar o seu escopo lexico
*/

function retornaFuncao(){
    const nome = 'Luiz';
    return function(){
        return nome;
    };
}

const funcao = retornaFuncao()
console.dir(funcao);