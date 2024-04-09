
document.querySelector('.row').addEventListener('click',(e)=>{
    console.log(e.target.tagName);
    if(e.target.tagName == 'IMG'){
       removeIt= e.target.parentNode;
       removeIt.remove();
    }
});