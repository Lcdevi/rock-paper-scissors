const handChoices = ["Rock","Paper","Scissors"];
let playerScore = 0;
let computerScore = 0;
let rounds = 0;

// Get player hand choice
const getHands = document.querySelector('.handCategories');
getHands.addEventListener('click',function (e) {
    const player = e.target.id;
    console.log(player);
});

// Get computer choice by random index selection in the hand arr choices
function computer() {
    return Math.floor(Math.random() * handChoices.length);
}

// Compare the round against the player input and computer
function playRound(playerInput, computerInput){
    let result = "";
    if(playerInput == computerInput){
        result = "It's a TIE!!!";
    } else if( (playerInput == 0 && computerInput == 2) || 
               (playerInput == 1 && computerInput == 0) ||
               (playerInput == 2 && computerInput == 1) ){
      result = `You win !! ${handChoices[playerInput]} beats ${handChoices[computerInput]}`;
      playerScore++;             
    } else {
      result = `You lose !! ${handChoices[computerInput]} beats ${handChoices[playerInput]}`;
      computerScore++;
    }
    rounds++;
}





// function playRound(playerSelection, computerSelection){
//     if(playerSelection == computerSelection){
//         result = "Its a TIE!!";
//     } else if( (playerSelection == "rock" && computerSelection == "scissors") || 
//                (playerSelection == "paper" && computerSelection == "rock") || 
//                (playerSelection == "scissors" && computerSelection == "paper") ){
                   
//         result = `You win ${playerSelection} beats ${computerSelection}`;
//         ++playerScore;
//     } else {
//         result = `You lose!! ${computerSelection} beats ${playerSelection}`
//         ++computerScore;;
//     }
//     round++;
//     return result;
// }






































// const handChoices = ["rock","paper","scissors"];
// let playerScore = 0;
// let computerScore = 0;
// let round = 0;
// let result = "";

// function game(){
//     let player ="";
//     for(let i = 0; i <= 4; i++){
//         player = prompt("Please type your choice, Rock,Paper, or Scissors").toLowerCase();
//         while(!checkPlayerInput(player)){
//             alert("Please stop breaking my game, Im just a girl, standing in front of a computer!!!");
//             player = prompt("Please type your choice, Rock,Paper, or Scissors").toLowerCase();
//         }
//         playRound(player,computerPlay());
//         console.log(`Round: ${round}
//                      Scores Player: ${playerScore} - CPU: ${computerScore}
//                      Match: ${result}`
//         );
//     }
//     reset();
// }

// function checkPlayerInput(input){
//     return ((input === "") || (handChoices.includes(input)));
// }

// function computerPlay(){
//     return handChoices[Math.floor(Math.random() * handChoices.length)];;
// }

// function playRound(playerSelection, computerSelection){
//     if(playerSelection == computerSelection){
//         result = "Its a TIE!!";
//     } else if( (playerSelection == "rock" && computerSelection == "scissors") || 
//                (playerSelection == "paper" && computerSelection == "rock") || 
//                (playerSelection == "scissors" && computerSelection == "paper") ){
                   
//         result = `You win ${playerSelection} beats ${computerSelection}`;
//         ++playerScore;
//     } else {
//         result = `You lose!! ${computerSelection} beats ${playerSelection}`
//         ++computerScore;;
//     }
//     round++;
//     return result;
// }

// function reset(){
//     playerScore = 0;
//     computerScore = 0;
//     round = 0;
//     result = "";
// }

// game();