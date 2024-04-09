let arr = [
    {
        dp:"https://plus.unsplash.com/premium_photo-1675107359685-f268487a3a46?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1711349477285-ad95fb50c99b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },{
        dp:"https://images.unsplash.com/photo-1604681630513-69474a4e253f?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1711028055623-b80e74fa4931?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },{
        dp:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGVsfGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1710959613252-02c007c51902?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },{
        dp:"https://images.unsplash.com/photo-1562572159-4efc207f5aff?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1710692063056-07d0e4c28b4b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    

]
let clutter=""
let stories = document.querySelector('.stories')
let fullscreen = document.querySelector('.full-screen')

arr.forEach((ele,indx)=>{
    // console.log(ele,indx)
    
    clutter += `<div class="story">
    <img src="${ele.dp}" id="${indx}" alt="">
</div>`
// console.log(clutter)
});
stories.innerHTML = clutter;
let closeStory = document.getElementById('closeStory');
stories.addEventListener('click',(e)=>{
// console.log(arr[e.target.id].story)
// console.log(e.classList)
fullscreen.style.display="block";
closeStory.style.display="block";
fullscreen.innerHTML = `<div class="story-frofile">
<img src="${arr[e.target.id].dp}" alt="">
<h6>name</h6>
</div>
<div class="story-img">
<img src="${arr[e.target.id].story}" alt="">
</div>`;
setTimeout(()=>{
    fullscreen.style.display="none";
},5000);
});

closeStory.addEventListener('click',()=>{
    fullscreen.style.display="none";
})
