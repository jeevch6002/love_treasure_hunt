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

let p=document.getElementById("pass").value.toLowerCase();

if(p=="jeeva"){
window.location.href="clue1.html";
}
else{
alert("Wrong password my love ❤️");
}

}

