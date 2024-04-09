// help  page accordian tab
const helpAccordianContainer = document.querySelector(
  ".help-accordian-container"
);
const tabBtn = document.querySelectorAll(".tab-btn");
const helpAccordian = document.querySelectorAll(".help-accordian");
tabBtn.forEach((btn, index) => {
  helpAccordianContainer.style.height = `${helpAccordianContainer.scrollHeight}px`;
  btn.addEventListener("click", () => {
    helpAccordian.forEach((helpAcc) => {
      helpAcc.classList.remove("active");
    });
    tabBtn.forEach((BtnTab) => {
      BtnTab.classList.remove("active");
    });
    helpAccordian[index].classList.add("active");
    tabBtn[index].classList.add("active");
  });
});

const GAccordianContainer = document.querySelectorAll(".G-accordian-container");

GAccordianContainer.forEach((Gacc, index) => {
  // console.log(Gacc,index1)
  let GQue = Gacc.querySelector(".G-que");
  let Gicoon = Gacc.querySelector(".G-down-icon");
  let Gans = Gacc.querySelector(".G-ans");
  GQue.addEventListener("click",()=>{
    GQue.classList.toggle('active');
    
    if(GQue.classList.contains('active')){
      Gicoon.style.transform = "rotate(180deg)";
      Gans.style.height = `${Gans.scrollHeight}PX`;
    } else{
      Gicoon.style.transform = "rotate(0)";
      Gans.style.height = "0px";
    }
    removeOpen(index);
  });
});

const  removeOpen = (index1)=>{
  GAccordianContainer.forEach((GaccR, index2) => {
    
    if (index1 != index2) {
      let CGQue = GaccR.querySelector(".G-que");
      CGQue.classList.remove("active");
      let CGicoon = GaccR.querySelector(".G-down-icon");
      CGicoon.style.transform = "rotate(0deg)";
      let CGans = GaccR.querySelector(".G-ans");
      CGans.style.height = "0px";
    }
  });
}
