var player=document.getElementById("player");
var position=190;
var position_ball=0;
var ball=document.getElementById("ball");
var time=1;
var score=document.getElementById("score");
var points=0;


function left(){
    position-=10;
    player.style.left=position+"px";
};

function right(){
    position+=10;
    player.style.left=position+"px";
};

function game(){
    position_ball+=1
    ball.style.top=position_ball+"px";
    setTimeout(game,time); 

    if (ball.style.top=="670px"){
        position_ball = 0;
        ball.style.top = "0px";
        points+=1;
        score.innerHTML="Score:0x"+points;
    };
    


}
game()