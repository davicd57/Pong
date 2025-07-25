var position=190;
var start_button=document.getElementById("start_button");
function left(){
    position-=10;
    player.style.left=position+"px";
}

function right(){
    position+=10;
    player.style.left=position+"px";
}

document.addEventListener("keydown", function(event) {
if (event.key === "ArrowLeft") {
    left();
} else if (event.key === "ArrowRight") {
    right();
}
});

function start(){
    start_button.remove()
    var player=document.getElementById("player");
    var position_ball=0;
    var ball=document.getElementById("ball");
    var time=1;
    var score=document.getElementById("score");
    var points_rival=0;
    var your_points=0;
    var result=document.getElementById("result");
    score.innerHTML="Score"+your_points+"x"+points_rival

    function game(){
        var playerRect=player.getBoundingClientRect();
        var ballRect=ball.getBoundingClientRect();
        position_ball+=2
        ball.style.top=position_ball+"px";
        setTimeout(game,time); 

        if (ball.style.top=="670px"){
            position_ball = 0;
            ball.style.top = "0px";
            var ball_spawn=Math.floor(Math.random()*450)+1;
            ball.style.left=ball_spawn+"px";
            points_rival+=1;
            score.innerHTML="Score:"+your_points+"x"+points_rival
            if (points_rival==15){
                result.innerHTML="You Lose"
            }
        }

        if (ballRect.bottom>=playerRect.top &&
            ballRect.left<playerRect.right &&
            ballRect.right>=playerRect.left
        ){
            position_ball = 0;
            ball.style.top = "0px";
            var ball_spawn=Math.floor(Math.random()*450)+1;
            ball.style.left=ball_spawn+"px";
            your_points+=1;
            score.innerHTML="Score:"+your_points+"x"+points_rival
            if (your_points==15){
                result.innerHTML="You Win"
            }
        }

    }
    game()
    } 
