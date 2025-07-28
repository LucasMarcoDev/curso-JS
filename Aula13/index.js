const verdadeira = true;

//let, const e var 
//Let tem escopo de bloco {... bloco}
//Var so tem escopo de funçao


let nome ='Luiz'; // Criando
var nome2 = 'Luiz';

if ( verdadeira) {
    let nome = 'Otavio'; //criando
   // console.log (nome, nome2);

    if ( verdadeira){
        let nome = 'Outra coisa';
        console.log(nome,nome2);
    }
}