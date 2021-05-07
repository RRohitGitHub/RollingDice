//Create variable for Game state

let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

// Create varaibles to store reference to DOM nodes

const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")

const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")

const message = document.getElementById("message");
const roll = document.getElementById("rollBtn");
const reset = document.getElementById("resetBtn");

document.getElementById("rollBtn").addEventListener("click",function(){
    const random = Math.floor(Math.random()*6) + 1;
})