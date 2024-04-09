const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

//console.log(buttons);
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        //console.log(e);
        //console.log(e.target);
        //console.log(e.target.id);
        // if(e.target.id == "grey"){
        //     body.style.backgroundColor = e.target.id;
        // }
        // if(e.target.id == "blue"){
        //     body.style.backgroundColor = e.target.id;
        // }
        // if(e.target.id == "yellow"){
        //     body.style.backgroundColor = e.target.id;
        // }
        // if(e.target.id == "white"){
        //     body.style.backgroundColor = e.target.id;
        // }
        switch(e.target.id){
            case "grey":
                body.style.backgroundColor = e.target.id;
                break;
            case "blue":
                body.style.backgroundColor = e.target.id;
                break;
            case "yellow":
                body.style.backgroundColor = e.target.id;
                break;
            case "white":
                body.style.backgroundColor = e.target.id;
                break;
            case "grey":
                body.style.backgroundColor = e.target.id;
                break;
           default:
            body.style.backgroundColor = "white";
        }

    });
});