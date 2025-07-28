const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody= getComputedStyle(document.body);
const backGroundColor= estilosBody.backgroundColor;

console.log(backgroundColorBody)
for(let p of ps){
    p.style.backgroundColorBody;
    p.style.color= '#FFFFFF';
}