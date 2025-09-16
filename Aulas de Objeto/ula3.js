//defineProperty -> Getter e Setters
//Getter pega o valor e mostra ele || Setter configura o valor modifica mas na retorna 
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque',{
        enumerable: true, // mostra a chave
        configurable: true, // configuravel
        get: function(){
            return estoque;
        },
        set: function(valor){
            console.log(valor);
        }
    });
}

const p1 = new Produto('camiseta', 20, 3);
p1.estoque = 'O valor que eu quero';
console.log(p1);
console.log(p1.estoque);