let gameSeq=[];
let userSeq=[];
let btns=["yellow" , "red" , "purple" , "green"];

let started =false;
let level=0;
let highestScore = 0; // Variable to keep track of the highest score

let h2=document.querySelector("h2");

document.addEventListener("keypress" , function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelup();
    }
})

function gameflash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
} , 250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    } , 250);
    }

function levelup(){
userSeq=[];
level++;
h2.innerText= `Level ${level}`;
let randomindex = Math.floor(Math.random()*4);
let randomcolor = btns[randomindex];
let randombtn = document.querySelector(`.${randomcolor}`);
gameSeq.push(randomcolor);
console.log(gameSeq);
gameflash(randombtn);
}

function checkAns(index){
// last user of user color match with game then win
if(userSeq[index]=== gameSeq[index]){
    if(userSeq.length === gameSeq.length){
       setTimeout(levelup , 1000);
    }
}
else{
    let heading = document.querySelector("#heading");
        heading.innerHTML = `Game is Over! Your score was <b>${level}</b> <br/> Press any key to Start`;
        HighestScore();
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    } ,1000);

    reset();
}

}

function buttonPress(){
let btn = this;
userflash(btn);

usercolor= btn.getAttribute("id");
console.log(usercolor);
userSeq.push(usercolor);
checkAns(userSeq.length -1);
}

let allbtn = document.querySelectorAll(".btn");
for(b of allbtn){
    b.addEventListener("click" ,buttonPress );
}

function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

function HighestScore() {
    const highScoreh2 = document.querySelector("#highScore");  //As game ends selecting score display h2 from html using dom and making changes accordingly
    if (level > highestScore) {
        highestScore = level;
        highScoreh2.innerHTML = `New highest score: ${highestScore}`;
    } else {
        highScoreh2.innerHTML = `Your highest score is ${highestScore}`;

}
}
