function createHeart(){

let heart=document.createElement("div");

heart.classList.add("heart");
heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";
heart.style.fontSize=Math.random()*20+10+"px";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);

}

setInterval(createHeart,300);

function checkPassword(){

let p = document.getElementById("pass").value;

if(p=="jeeva"){
alert("Correct!");
window.location.href="clue1.html";
}
else{
alert("Wrong password my love ❤️");
  
}
  function checkClue1(){

let ans = document.getElementById("clue1pass").value.toLowerCase();

if(ans == "instagram"){
window.location.href = "game.html";
}
else{
alert("That's not the right memory ❤️ Try again!");
}

}

}



