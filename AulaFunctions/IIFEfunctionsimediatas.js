//IIF -> Immediatly invoked function expression (Funçao autoinvocada)
// sao funcoes que sao invocadas imediatamente apos serem declaradas
(function(idade,peso,altura){

    const sobreNome = 'Marco';
    function criaNome(nome){
        return nome + ' ' + sobreNome;
    }

    function falaNome(){
        console.log(criaNome('Lucas'));
    }

    falaNome();
    console.log(idade,peso,altura)

})(27,68,1.68);


/*
(function(){
    const nome = 'Lucas'
    console.log(nome)
})();

const nome = 'Renata';

console.log(nome)

*/