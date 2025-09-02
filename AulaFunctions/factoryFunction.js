//Funçoes fabrica    Factory Function  sao funçoes que retornam objetos
//Factory function (Funçao fabrica)
function criaPessoa(nome, sobrenome,a, p){

    return{
        nome,
        sobrenome,
        fala: function(assunto){
            return `${this.nome} esta falando ${assunto}.`
        },
        altura: a,
        peso: p,
        imc(){
            const indice = this.peso /( this.altura**2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Lucas', 'Marco', 1.68, 68);
console.log(p1)