const accordian = document.querySelectorAll('.accordian');

accordian.forEach((acc,index)=>{
  const question = acc.querySelector('.question')
  question.addEventListener('click',()=>{
    acc.classList.toggle('active');
    
    let answar = acc.querySelector('.answar');
    let icon = acc.querySelector('.question i');
    if(acc.classList.contains('active')){
      answar.style.height = `${answar.scrollHeight}px`;
      icon.style.transform = "rotate(180deg)";
    } else{
      answar.style.height = "0px";
      icon.style.transform = "rotate(0deg)";
    }
    removeOpen(index);
  
    // console.log(answar);
  })

});

function removeOpen(index1){

  accordian.forEach((acc2,index2)=>{
 
    if(index1 != index2){
      acc2.classList.remove("active");
      let ans = acc2.querySelector('.answar');
      ans.style.height = "0px";
      let icon = acc2.querySelector('.question i');
      icon.style.transform = "rotate(0deg)";
    }
  })
}