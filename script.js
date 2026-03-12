function createHeart(){

let heart=document.createElement("div");

heart.classList.add("heart");
heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";
heart.style.fontSize=Math.random()*20+10+"px";

document.body.appendChild(heart);

setTimeout(()=>{heart.remove();},6000);

}

setInterval(createHeart,300);

function checkPassword(){

let p=document.getElementById("pass").value;

if(p=="jeeva"){
window.location.href="clue1.html";
}
else{
alert("Wrong password my love ❤️");
}

}

function checkClue1(){

let ans=document.getElementById("clue1pass").value.toLowerCase();

if(ans=="birthday"){
window.location.href="game.html";
}
else{
alert("Wrong memory ❤️");
}

}

let score=0;

function catchHeart(){

score++;

document.getElementById("score").innerHTML=score;

if(score==5){

window.location.href="quiz.html";

}

}

function nextLove(){
window.location.href="love.html";
}

let messages=[

"You always Listens to me",
"I love when you smile",
"You always Compremise for me",
"You never fail to understand me",
"You always loves me"
];

function showLove(){

let random=Math.floor(Math.random()*messages.length);

document.getElementById("loveText").innerHTML=messages[random];

}

function goLetter(){
window.location.href="letter.html";
}

function goFinal(){
window.location.href="final.html";
}
