//Declaraçao de funçao  (Function hoisting)
falaOi();
function falaOi(){
    console.log('oi');
}


//First-Class objects (Objetos de primeira classe)
//Function expression
const souUmDado = function (){
    console.log('Sou um dado.');
};
souUmDado();

// Arrow function
const arrowFuncao = () => {
    console.log('Sou uma arrow function');
};

arrowFuncao();

//Dentro de um objeto podemos colocar uma funçao

const obj = {
    falar: function(){
        console.log('estou falando...')
    }
}

obj.falar()