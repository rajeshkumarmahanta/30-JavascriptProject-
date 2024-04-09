const body = document.querySelector('body');
const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
let intervalId;
const randomColor = () =>{
    let color = '#';
    let hex = '0123456789ABCDEF';
   
    for (let i=0 ; i < 6; i++){
    color+= hex[Math.floor(Math.random()*16)]
    }
    return color;
}
const changeColor = ()=>{
    if(!intervalId){
    intervalId = setInterval(()=>{
        body.style.backgroundColor = randomColor();
    },1000)
}
}

startBtn.addEventListener('click',()=>{
    changeColor();
    
});
stopBtn.addEventListener('click',()=>{
  clearInterval(intervalId);
  intervalId = null;
});
