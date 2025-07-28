function meuEscopo (){ 
    const form = document.querySelector('.form');
    const result = document.querySelector('.resultado')
    const pessoas =[]
   

    let i = 1
    function FunMeuEscopo (evento){
        evento.preventDefault();
        const nome = document.querySelector('.nome');
        const sobrenome = document.querySelector('.snome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        const dados = {
            nom: nome.value,
            sobrenom:sobrenome.value,
            altur:altura.value,
            pes:peso.value
        };
        pessoas.unshift(dados.nom);
        pessoas.unshift(dados.sobrenom);
        pessoas.unshift(dados.altur);
        pessoas.unshift(dados.pes);
        result.innerHTML+= `<p>${pessoas}</p>`
    };
    console.log(pessoas)
    form.addEventListener('submit', FunMeuEscopo)
}
meuEscopo();



 /*   form.onsubmit = function (evento){
        evento.preventDefault()
        alert(1)
        console.log('foi enviado');
    };

*/