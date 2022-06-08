let signInBtn=document.getElementById("sign-in").textContent;
let modal=document.getElementById("form-container");
var close=document.getElementById("close").innerText;
var main =document.querySelector(".main");
let header=document.querySelector("header");
var greenEarth=document.querySelector(".big-pic");
let heroSection=document.getElementById("hero-section");
let explainSection=document.querySelector(".explain-section");


document.getElementById("sign-in").addEventListener("click",()=>{
    modal.style.display="block";
    explainSection.style.filter="blur(7px)";
    header.style.filter="blur(7px)";
    heroSection.style.filter="blur(7px)";
    header.style.pointerEvents="none";
   

});

document.getElementById("close").addEventListener("click",function(){
    modal.style.display="none";
    explainSection.style.filter="";
    header.style.filter="";
    heroSection.style.filter="";
    header.style.pointerEvents="all";
   

});