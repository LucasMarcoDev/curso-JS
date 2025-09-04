//Funçoes construtoras      constructions function
//cria e retorna objetos funçao fabrica tambem faz o mesmo
//Construtora mudamos a conveçao como escrevemos -> precisamos sempre inicia-la com letra maiuscula devemos sempre usar a palavra new
// Pesso(new)
//Palavra new cria um objeto vazio aponta para o this e nos retorna o valor

function Pessoa(nome,sobrenome){
    //atributos ou metodos Privadas
    const ID = 123456;
    const metodoInterno = function(){
        
    }


    //Atributos ou metodos publicos
    this.nome = nome;
    this.sobrenome=sobrenome;
    this.metodo = function(){
        console.log(this.nome + ' Sou um metodo')
    }
}

const p1 = new Pessoa('Lucas', 'Marco');
const p2 = new Pessoa('Renata', 'Batista');
p1.metodo()
console.log(p2.nome)