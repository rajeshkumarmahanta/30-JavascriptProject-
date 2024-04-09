const isStatus = document.querySelector('#isStatus');
const btn = document.querySelector('#btn');

let friendNum = document.querySelector('#friendNum')
let checked = 1;
let friendCount = 0;
btn.addEventListener('click',()=>{
    if(checked == 1){
        isStatus.innerHTML = "Friends";
        btn.innerHTML = "Remove Friends";
        checked = 0;
        friendCount =friendCount+ 1;
        friendNum.innerHTML = friendCount;
        console.log(friendCount)
    }
    else{
        isStatus.innerHTML = "Stranger";
        btn.innerHTML = "Add Friends";
        checked = 1;
        friendCount =  friendCount - 1;
        friendNum.innerHTML = friendCount;
        console.log(friendCount)
    }
});

