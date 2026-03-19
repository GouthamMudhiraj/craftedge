let pbottom=document.querySelector('.pbottom')
let timerval=document.querySelector('#Timerval')
for(let i=0;i<=166;i++){
    let divEle=document.createElement('div')
    divEle.className='bubble';
    let no=Math.ceil(Math.random()*10)
    divEle.innerText=no
    pbottom.append(divEle)
}
let timer=60;

function Runtime(){
   let timeNegative= setInterval(()=>{
        if(timer>0){
        timer--;
        timerval.innerText=timer
        }
        else{
            clearInterval(timeNegative);
        }
    },1000); 
}
Runtime();
