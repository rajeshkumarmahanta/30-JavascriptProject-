

let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let unit = document.getElementById('unit');



setInterval(()=>{
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let u = (h >= 12) ? 'PM' : 'AM';

    if(h > 12){
        h = h - 12;
    }
   h = ( h < 10 ) ? '0' + h : h;
   m = ( m < 10 ) ? '0' + m : m;
   s = ( s < 10 ) ? '0' + s : s;
    hour.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;
    unit.innerHTML = u;
    
},1000);