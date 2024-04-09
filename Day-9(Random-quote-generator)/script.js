const quote = document.querySelector('#quote');
const author = document.querySelector('.author');
const nextBtn = document.querySelector('#nextBtn');
fetch('https://dummyjson.com/quotes/random').then((Response)=>{
    return Response.json();
}).then((ResponseData)=>{
    // console.log(ResponseData);
    quote.innerHTML=ResponseData.quote;
    author.innerHTML=ResponseData.author;
   

}).catch((error)=>{
    console.log(error);
});
nextBtn.addEventListener('click',()=>{
    fetch('https://dummyjson.com/quotes/random').then((Response)=>{
    return Response.json();
}).then((ResponseData)=>{
    // console.log(ResponseData);
    quote.innerHTML=ResponseData.quote;
    author.innerHTML=ResponseData.author;
   

}).catch((error)=>{
    console.log(error);
});
})