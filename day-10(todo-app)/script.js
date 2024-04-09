const inputText = document.querySelector("#inputText");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector(".task-list");

addBtn.addEventListener("click", () => {
  if (inputText.value === "") {
    alert("You must write sommething");
  } else { 
    let li = document.createElement("li");
    li.innerHTML = inputText.value;
    taskList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span)
  }
  inputText.value ='';
  saveData();
});

inputText.addEventListener('keyup',(e)=>{
    if(e.key == "Enter"){
        if (inputText.value === "") {
            alert("You must write sommething");
          } else {
            let li = document.createElement("li");
            li.innerHTML = inputText.value;
            taskList.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span)
          }
          inputText.value ='';
          saveData();
    }
});

taskList.addEventListener('click',(e)=>{
// console.log(e.target.tagName)
if(e.target.tagName == "LI"){
    e.target.classList.toggle('checked');
    saveData();
}else if(e.target.tagName == "SPAN"){
    e.target.parentElement.remove();
    saveData();
}
});

function saveData(){
    localStorage.setItem("Data",taskList.innerHTML);
}
function showData(){
    taskList.innerHTML = localStorage.getItem("Data");
}
showData();
