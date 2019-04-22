let answer = 0;
let crystalValue = 0;
let score = 0;
let lose = 0;
let win = 0;

function random(min,max) {
    let random = Math.floor(Math.random() * (max-min+1)) + min;
    return random;
}



function start() {
    let answer = random(19, 120);
    console.log(answer);
    $('#answer').append(answer);
    let crystalValue = random(1, 12);
    console.log(crystalValue);
    $('#score').append(score);
    $('#wins').append(win);
    $('#losses').append(lose);
    $('#crystals').show();
}

$('#pink').click(function() {
    let totalscore = (score + crystalValue);
    $("#score").text(totalscore);
    if (totalscore === answer) {
        win++;
        $('#wins').append(win);
        $("winMessage").text("YOU WIN!!!");
        start();
    } else if (totalscore > answer) {
        $("crystals").hide();
        lose++;
        $('#losses').append(lose);
        start();
    }
}); 

start();




////maybe switch    getter method takes an id and returns crystal value