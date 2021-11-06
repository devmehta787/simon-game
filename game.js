var buttonColors=["red", "blue", "green", "yellow"], gamePattern=[], userClickedPattern=[];

$(".btn").click(function(){
    var userChoosenColor= $(this).attr("id");
    userClickedPattern.push(userChoosenColor);
    
    playSound(userChoosenColor);
    animatePress(userChoosenColor);
});


function nextSequence(){
    var randomNumber = Math.floor((Math.random())*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#"+ randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}


function playSound(name){
    var audio = new Audio("sounds/"+ name +".mp3");
    audio.play();
}


function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100);
}