const container =document.querySelector('.container');
const like =document.querySelector('#like');
const loveIcon = document.querySelector('.love-icon');

container.addEventListener('dblclick',()=>{
    like.style.transform="scale(3)";
    like.style.opacity=0.8;
    
    setTimeout(()=>{
        like.style.opacity=0;
        like.style.transform="scale(0)";
    },2000);
        
    loveIcon.classList.add("ri-heart-fill");
    loveIcon.classList.remove('ri-heart-line');
   
});
loveIcon.addEventListener('click',(e)=>{
    // console.log(e.target.classList[0])
    if(e.target.classList[1] == "ri-heart-line"){
        e.target.classList.add("ri-heart-fill");
        e.target.classList.remove("ri-heart-line");
        like.style.transform="scale(3)";
    like.style.opacity=0.8;
    setTimeout(()=>{
        like.style.opacity=0;
        like.style.transform="scale(0)";
    },2000);
        
    }else if((e.target.classList[1] == "ri-heart-fill")){
        e.target.classList.add("ri-heart-line");
        e.target.classList.remove("ri-heart-fill");
    }
})