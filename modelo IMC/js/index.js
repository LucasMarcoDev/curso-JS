let peso = window.document.getElementById('input-teste-1')
let altura = document.getElementById('input-teste-2')
let respost = document.getElementById('resp')

const form = document.querySelector('.form')
function imc(evento){
    evento.preventDefault();
    let pes = parseFloat(peso.value)
    let alt = parseFloat(altura.value)
    let indice =  pes / (alt *alt)

    if(indice < 18.5){
      respost.innerHTML= 'abaixo do peso' ;
    } else if (indice > 18.5 && indice < 25){
        respost.innerHTML= 'peso normal';
    } else if(indice > 25 && indice < 30){respost.innerHTML= 'sobrepeso'
        
    } else if (indice > 30 && indice < 35){
        respost.innerHTML= 'Obesidade Grau 1'
    } else if (indice > 35 && indice < 40){
        respost.innerHTML= 'Obesidade Grau 2'
    } else{
        respost.innerHTML= 'Obesidade Grau 3'
    };
  addEventListener('submit', imc)

}