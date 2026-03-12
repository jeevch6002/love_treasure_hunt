let questions=[

{
q:"On whose birthday the story started?",
options:["Your","Me","No one"],
answer:1
},

{
q:"Who said I love you first?",
options:["You","Me","No one"],
answer:2
},

{
q:"Our favourite Spot?",
options:["School","Park","Rk-6 Mine"],
answer:0
}

];

let current=0;
let score=0;

function loadQuestion(){

document.getElementById("question").innerHTML=questions[current].q;

document.getElementById("btn0").innerHTML=questions[current].options[0];
document.getElementById("btn1").innerHTML=questions[current].options[1];
document.getElementById("btn2").innerHTML=questions[current].options[2];

}

function checkAnswer(i){

if(i==questions[current].answer){

score++;
document.getElementById("score").innerHTML=score;

}

current++;

if(current<questions.length){

loadQuestion();

}
else{

alert("You know our love story ❤️");

window.location.href="memory.html";

}

}

loadQuestion();