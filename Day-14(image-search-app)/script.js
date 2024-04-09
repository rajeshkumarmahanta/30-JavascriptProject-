const key = "AyH9me-Xo7pQtiuPb0Ij18wcqia9exgujblmCqTT4rs";

const loadMore = document.getElementById('loadMoreBtn')
const form = document.querySelector("form");
const inputSearch = document.querySelector("#inputSearch");
const searchBtn = document.querySelector("#searchBtn");
const images = document.querySelector(".images");
let page = 1;
let keyword = "";

async function searchImage(){
  keyword = inputSearch.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${key}`;
  const response = await fetch(url);
  const responseData = await response.json();
  // console.log(responseData.results);
  if(page===1){
    images.innerHTML = "";
  }
  const results = responseData.results;
  results.forEach((photo)=>{
    // console.log(img)
    const divEle = document.createElement('div');
        divEle.classList.add("imgDiv");
        const imgDesc = document.createElement('h4');
        const imgOverly = document.createElement('div');
        imgOverly.classList.add("imgOverly");
        divEle.innerHTML = `<img src="${photo.urls.regular}"/>`;
        imgDesc.innerHTML = photo.alt_description;
        divEle.appendChild(imgDesc);
        images.appendChild(divEle);
        divEle.appendChild(imgOverly);

  });
};
loadMore.addEventListener('click',()=>{
  page++;
  searchImage();
})
form.addEventListener('submit',(e)=>{
  loadMore.style.display="block";
  e.preventDefault();
  if(inputSearch.value == ""){
    images.innerHTML = "<h2>Enter a keyword</h2>";
    loadMore.style.display="none";
  }
  page=1;
  searchImage();
})