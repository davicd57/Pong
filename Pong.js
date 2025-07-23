var player=document.getElementById("player");
var position=190;
var position_ball=0;
var ball=document.getElementById("ball");
var time=1;
var score=document.getElementById("score");
var points_rival=0;
var your_points=0;

score.innerHTML="Score"+your_points+"x"+points_rival


function left(){
    position-=10;
    player.style.left=position+"px";
}

function right(){
    position+=10;
    player.style.left=position+"px";
}

function game(){
    var playerRect=player.getBoundingClientRect();
    var ballRect=ball.getBoundingClientRect();
    position_ball+=1
    ball.style.top=position_ball+"px";
    setTimeout(game,time); 

    if (ball.style.top=="670px"){
        position_ball = 0;
        ball.style.top = "0px";
        points_rival+=1;
        score.innerHTML="Score:0x"+points_rival;
    }

    if (ballRect.bottom>=playerRect.top &&
        ballRect.left<playerRect.right &&
        ballRect.right>=playerRect.left
    ){
        position_ball = 0;
        ball.style.top = "0px";
        your_points+=1;
        score.innerHTML="Score:"+your_points+"x0";
    }
    


}
game()
