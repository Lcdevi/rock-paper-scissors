// Global variable declaration
const handChoices = ["Rock", "Paper", "Scissors"];
const playerScore = document.querySelector('.gameDetails #player');
const computerScore = document.querySelector('.gameDetails #computer');
const gameRound = document.querySelector('.rounds #round');
const result = document.querySelector('.gameStatus h2');
const getHands = document.querySelector('.handCategories');

getHands.addEventListener('click', function (e) {
    player = e.target.id;
    gameInit(player);
});

// Get computer choice by random index selection in the hand arr choices
function computerInput() {
    return Math.floor(Math.random() * handChoices.length);
}

// Compare the round against the player input and computer
function playRound(playerInput, computerInput) {
    gameRound.textContent = parseInt(gameRound.textContent, 10) + 1;
    if (playerInput == computerInput) {
        result.textContent = "It's a TIE!!!";
    } else if ((playerInput == 0 && computerInput == 2) ||
        (playerInput == 1 && computerInput == 0) ||
        (playerInput == 2 && computerInput == 1)) {
        result.textContent = `You win !! ${handChoices[playerInput]} beats ${handChoices[computerInput]}`;
        playerScore.textContent = parseInt(playerScore.textContent, 10) + 1;
    } else {
        result.textContent = `You lose !! ${handChoices[computerInput]} beats ${handChoices[playerInput]}`;
        computerScore.textContent = parseInt(computerScore.textContent, 10) + 1;
    }
    console.log(gameRound.textContent);
}

// Initialize the game and apply the dom styling in the html
function gameInit(player) {
    if (Number(gameRound.textContent) === 5) {
        
        isWinner();
    } else {
        playRound(player, computerInput());
    }
}

function isWinner() {
    (Number(playerScore.textContent) > Number(computerScore.textContent)) ? result.textContent = "You win the game! Congratulations!" :
        (Number(computerScore.textContent) > Number(playerScore.textContent)) ? result.textContent = "You lost the game! against a bot!" :
            result.textContent = "Its a TIE!!!!"
}
