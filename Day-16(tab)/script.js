const tabBtn = document.querySelectorAll('.tab-btn');
const Content = document.querySelectorAll('.content');
tabBtn.forEach((button,index)=>{
    button.addEventListener('click',()=>{
        Content.forEach(cont =>{
            // console.log(cont)
            cont.classList.remove("active");
        });
        tabBtn.forEach(tab =>{
            tab.classList.remove("active")
        });
        tabBtn[index].classList.add('active')
        Content[index].classList.add('active')
        
    })
})
