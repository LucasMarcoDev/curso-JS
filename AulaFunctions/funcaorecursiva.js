//funçoes recursivas, sao funçoes que se chamam a si proprias 
//esse tipo de funçao tem um limite o qual ele nao volta mais a ser chamado
function recursiva(max){
    console.log(max);
    if (max >=10) return;
    max++;
    recursiva(max)
}

recursiva(0);