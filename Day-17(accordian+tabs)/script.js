const tabBtn = document.querySelectorAll(".tab-btn");
const tabContent = document.querySelectorAll('.content');

tabBtn.forEach((button,index)=>{
    button.addEventListener('click',()=>{
        tabContent.forEach(content=>{
            content.classList.remove('active');
        });
        tabBtn.forEach(ContBtn=>{
            ContBtn.classList.remove('active');
        })
        tabBtn[index].classList.add('active');
        tabContent[index].classList.add('active');
    });
});


const Gaccordian = document.querySelectorAll('.G-accordian');
Gaccordian.forEach((Gacc,ind)=>{
    // console.log(Gacc,ind);
    let accQ= Gacc.querySelector('.G-acc-Que');
    let accA = Gacc.querySelector('.G-acc-Ans');
    let downi = Gacc.querySelector('.Q-down-i');
    accQ.addEventListener('click',()=>{
        accQ.classList.toggle('active');
        if(accQ.classList.contains('active')){
            accA.style.height = `${accA.scrollHeight}px`;
            downi.style.transform="rotate(180deg)";
        }else{
            accA.style.height="0px";
            downi.style.transform="rotate(0)";
        }
        removeOpen(ind);
    });
    
});

const removeOpen = (indx)=>{
    Gaccordian.forEach((accG,indx1)=>{
        if(indx != indx1){
            let accQ = accG.querySelector('.G-acc-Que');
            accQ.classList.remove('active');
            let accA = accG.querySelector('.G-acc-Ans');
            let downi = accG.querySelector('.Q-down-i');
            accA.style.height="0px";
            downi.style.transform="rotate(0)";
        }
    });
}
