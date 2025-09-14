
function r(event){


 t=event.code;
if(t=="ArrowUp"){
    console.log("player moves up");

}
else if(t=="ArrowDown"){
    console.log("player moves down");

}

else if(t=="ArrowLeft"){
    console.log("player moves back");

}

else if(t=="ArrowRight"){
    console.log("player moves forward");

}
else{
      console.log("enter agin");
}

}





let inp=document.querySelector("input");

let b=document.querySelector("button");
// b.addEventListener("click",r);
b.addEventListener("dblclick",r);
inp.addEventListener("keydown",r);

