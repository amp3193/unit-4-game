let answer = 0; // the value to be guessed
let crystalValue = []; // the assigned (random) crystal values
let score = 0; // the current user scored (what they have clicked)
let lose = 0; // loss counter
let win = 0; // win counter

//resets values every game
const blue_index = 0;
const diamond_index = 1;
const pink_index = 2;
const yellow_index = 3;

function random(min,max) {
    let random = Math.floor(Math.random() * (max-min+1)) + min;
    return random;
}

function setCrystalValues() {
    crystalValue = [
        random(1, 12), // blue
        random(1, 12), // diamond
        random(1, 12), // pink
        random(1, 12), // yellow
    ];
    console.log("This is the crystalValue array" + crystalValue);
}

function incrementScore(index) {
    let value = crystalValue[index];
    score += value;
    console.log("This is the score" + score);
}

function start() {
    answer = random(19, 120);
    console.log("this is the answer" + answer);
    $('#answer').text(answer);
    setCrystalValues();
    $('#score').text(score);
    $('#wins').text("Wins: " + win);
    $('#losses').text("Losses: " + lose);
}

function handleclick(index) {
    incrementScore(index);
    $("#score").text(score);
    
    if (score === answer) {
        console.log("win");
        win++;
        score = 0;
        start();
    } else if (score > answer) {
        console.log("lose");
        lose++;
        score = 0;
        start();
    } else {
        console.log("this is the else" + answer);
    }

}

let blueClick = function() {
    handleclick(blue_index);
}

$("#blue").click(blueClick); 

let diamondClick = function() {
    handleclick(diamond_index);
}

$("#diamond").click(diamondClick); 

let pinkClick = function() {
    handleclick(pink_index);
}

$("#pink").click(pinkClick); 

let yellowClick = function() {
    handleclick(yellow_index);
}

$("#yellow").click(yellowClick); 

start();
