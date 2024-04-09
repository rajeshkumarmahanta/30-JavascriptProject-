const openModal = document.getElementById('openModal');
const modalCloseX = document.getElementById('modalCloseX');
const modalClose = document.getElementById('modalClose');
const modalContainer = document.querySelector('.modal-container');
const modal = document.querySelector('.modal');
openModal.addEventListener('click',()=>{
    modalContainer.classList.add('activeModalContainer');
    modal.classList.add('activeModal');

});
modalClose.addEventListener('click',()=>{
    modalContainer.classList.remove('activeModalContainer');
    modal.classList.remove('activeModal');

    
});
modalCloseX.addEventListener('click',()=>{
    modalContainer.classList.remove('activeModalContainer');
    modal.classList.remove('activeModal');

});
window.addEventListener('click',(e)=>{
    if(e.target.className == "modal-container activeModalContainer"){
        modalContainer.classList.remove('activeModalContainer');
    modal.classList.remove('activeModal');
    }
    
})
