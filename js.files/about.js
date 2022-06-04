window.onload=function(){

let signInBtn=document.getElementById("sign-in");
let registerBtn=document.getElementById("register");
let modal=document.getElementById("form-container");
var main=document.querySelector(".main");
var close=document.getElementById("close");

function showModal(){
    modal.style.display="block";
    
    main.style.filter="blur(7px)";
   
   
    
};
function closeModal(){
    modal.style.display="none";
    main.style.filter="";
};

document.getElementById("register").addEventListener("click",()=>{
    modal.style.display="block";
    main.style.filter="blur(7px)";
});

document.getElementById("sign-in").addEventListener("click",()=>{
    modal.style.display="block";
    main.style.filter="blur(7px)";

});

document.getElementById("close").addEventListener("click",function(){
    modal.style.display="none";
    main.style.filter="";

});


}
