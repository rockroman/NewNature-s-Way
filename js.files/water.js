let signInBtn=document.getElementById("sign-in").textContent;
let modal=document.getElementById("form-container");
var close=document.getElementById("close").innerText;
var main =document.querySelector(".main");
let header=document.querySelector(".header");
var navigation=document.querySelector(".nav-bar");


document.getElementById("sign-in").addEventListener("click",()=>{
    modal.style.display="block";
    main.style.filter="blur(7px)";
    header.style.filter="blur(7px)";
    navigation.style.pointerEvents="none";

});

document.getElementById("close").addEventListener("click",function(){
    modal.style.display="none";
    main.style.filter="";
    header.style.filter="";
    navigation.style.pointerEvents="all";

});