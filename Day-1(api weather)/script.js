const searchBox = document.querySelector('#search-box');
const searchBtn = document.querySelector('#search-btn');
const city = document.querySelector('.city');
const temp = document.querySelector('#temp');
const humadility = document.querySelector('#humadility');
const wind = document.querySelector('#wind');
const weatherImg = document.querySelector('.img-weather');

const api_key='9def0c380867ea3a1794f56ed6d06eb0';

window.addEventListener('load',async ()=>{
    let location = navigator.geolocation.getCurrentPosition((position)=>{
        
       let lat = position.coords.latitude;
       let lon = position.coords.longitude;
       fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`).then((Response)=>{
        return Response.json()
       }).then((ResponseData)=>{
        temp.innerHTML=`${Math.round(ResponseData.main.temp-273.15)}`
    city.innerHTML = ResponseData.name;
    humadility.innerHTML = ResponseData.main.humidity;
    wind.innerHTML = ResponseData.wind.speed;
    if(ResponseData.weather[0].main=="Clouds"){
        //console.log(ResponseData.weather[0].main)
        weatherImg.src = 'img/clouds.png'
    }else if(ResponseData.weather[0].main=="Clear"){
        // console.log(ResponseData.weather[0].main)
        weatherImg.src = 'img/clear.png'
    }else if(ResponseData.weather[0].main=="Rain"){
        // console.log(ResponseData.weather[0].main)
        weatherImg.src = 'img/rain.png'
    }
    else if(ResponseData.weather[0].main=="Drizzle"){
        // console.log(ResponseData.weather[0].main)
        weatherImg.src = 'img/snow.png'
    }
    else if(ResponseData.weather[0].main=="Mist"){
        // console.log(ResponseData.weather[0].main)
        weatherImg.src = 'img/mist.png'
    }
       }).catch((error)=>{
        console.log(error);
       });
    },()=>{
        console.log('failed to get location');
    });
    console.log(location);
    
});



searchBtn.addEventListener('click',()=>{
    if(searchBox.value ==""){
        alert('please enter city');
    }else{

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchBox.value}&appid=${api_key}`).then((Response)=>{
            console.log(Response);
            return Response.json()
    }).then((ResponseData)=>{
       console.log(ResponseData)
        temp.innerHTML=`${Math.round(ResponseData.main.temp-273.15)}`
        city.innerHTML = ResponseData.name;
        humadility.innerHTML = ResponseData.main.humidity;
        wind.innerHTML = ResponseData.wind.speed;
        if(ResponseData.weather[0].main=="Clouds"){
            //console.log(ResponseData.weather[0].main)
            weatherImg.src = 'img/clouds.png'
        }else if(ResponseData.weather[0].main=="Clear"){
            // console.log(ResponseData.weather[0].main)
            weatherImg.src = 'img/clear.png'
        }else if(ResponseData.weather[0].main=="Rain"){
            // console.log(ResponseData.weather[0].main)
            weatherImg.src = 'img/rain.png'
        }
        else if(ResponseData.weather[0].main=="Drizzle"){
            // console.log(ResponseData.weather[0].main)
            weatherImg.src = 'img/snow.png'
        }
        else if(ResponseData.weather[0].main=="Mist"){
            // console.log(ResponseData.weather[0].main)
            weatherImg.src = 'img/mist.png'
        }
    }).catch((error)=>{
        console.log(error);
    });
    searchBox.value="";
    }
});


// color changers

const body = document.querySelector('body');
const colors = document.querySelectorAll('.color');
const colorPicker = document.querySelector('#colorPicker');
colors.forEach((button)=>{
    button.addEventListener('click',(e)=>{
    //    console.log(e.target.id)
    if(e.target.id == 'blue'){
        console.log(e.target.id)
        body.style.backgroundColor = "#337ab7";
    }else if(e.target.id == 'green'){
        console.log(e.target.id)
        body.style.backgroundColor = "#449d44";
    }else if(e.target.id == 'yellow'){
        console.log(e.target.id)
        body.style.backgroundColor = "#ec971f";
    }else if(e.target.id == 'red'){
        console.log(e.target.id)
        body.style.backgroundColor = "#c9302c";
    }else if(e.target.id == 'white'){
        console.log(e.target.id)
        body.style.backgroundColor = e.target.id;
    }else if(e.target.id == 'black'){
        console.log(e.target.id)
        body.style.backgroundColor = e.target.id;
    }
    
    })
});
colorPicker.addEventListener('input',()=>{
    body.style.backgroundColor = colorPicker.value;
});






