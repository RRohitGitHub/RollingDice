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

function resetButton(){
    player1Score = 0;
    player2Score = 0;
    player1Turn = true;
    message.textContent="Player1 Turn";
    player1Scoreboard.textContent=0;
    player2Scoreboard.textContent=0;
    player1Dice.textContent="-";
    player2Dice.textContent="-";
    roll.style.display="block";
    reset.style.display="none";
    player1Dice.classList.add("active")
    player2Dice.classList.remove("active")
}

document.getElementById("rollBtn").addEventListener("click",function(){
    const random = Math.floor(Math.random()*6) + 1;
    if(player1Turn){
        player1Score+=random;
        player1Scoreboard.textContent = player1Score;
        player1Dice.textContent = random;
        player1Turn = false;
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
        
    }
    else{
        player2Score+=random;
        player2Scoreboard.textContent = player2Score;
        player2Dice.textContent = random;
        player1Turn = true;
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
     
    }

    if(player1Score>=20)
    {
        message.textContent = "Player 1 Won 🥳"
        roll.style.display="none";
        reset.style.display="block";
    }
    else if(player2Score>=20){
        message.textContent = "Player 2 Won 🥳"
        roll.style.display="none";
        reset.style.display="block";
    }
})

reset.addEventListener("click",resetButton);