let emojis=["❤️","❤️","💖","💖","💘","💘","💕","💕"];

emojis.sort(()=>0.5-Math.random());

let grid=document.getElementById("grid");

let first=null;
let second=null;
let lock=false;
let matches=0;

emojis.forEach(e=>{

let card=document.createElement("div");
card.classList.add("card");
card.innerHTML="?";

card.onclick=function(){

if(lock||card.innerHTML!="?") return;

card.innerHTML=e;

if(!first){

first=card;

}
else{

second=card;
lock=true;

if(first.innerHTML==second.innerHTML){

matches++;

first=null;
second=null;
lock=false;

if(matches==4){

setTimeout(()=>{

alert("You unlocked the memory ❤️");

window.location.href="clue2.html";

},500);

}

}
else{

setTimeout(()=>{

first.innerHTML="?";
second.innerHTML="?";

first=null;
second=null;
lock=false;

},800);

}

}

}

grid.appendChild(card);

});