const sideMenuItem = document.getElementById('sideMenuItem');
let icon = document.getElementById('icon');
const toggleButton = document.getElementById('sideMenu');
toggleButton.addEventListener('click',()=>{
    if(icon.classList[1]== "fa-bars"){
        icon.classList.remove('fa-bars')
        icon.classList.add('fa-xmark')
    }else if(icon.classList[1]== "fa-xmark"){
        icon.classList.remove('fa-xmark')
        icon.classList.add('fa-bars')
    }
  
sideMenuItem.classList.toggle('active');
});