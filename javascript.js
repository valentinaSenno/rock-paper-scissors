document.getElementById("rock").addEventListener('click', () => playRound('Rock'));
document.getElementById("paper").addEventListener('click', () => playRound('Paper'));
document.getElementById("scissors").addEventListener('click', () => playRound('Scissors'));
const resultText = document.getElementById("result");
const humanScoreText = document.getElementById("human-score");
const computerScoreText = document.getElementById("computer-score");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const computerPlayer = Math.floor(Math.random() * 3) + 1;
    if (computerPlayer === 1) {
        return "Rock";
    } else if (computerPlayer === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }   
}

function getHumanChoice() {
    let choice = prompt("Please enter your choice (Rock, Paper, Scissors):");

        if (choice === null) {
        return null;  
    }
    
    choice = choice.trim().toLowerCase();

        if (choice === 'rock') {
        return 'Rock';
    } else if (choice === 'paper') {
        return 'Paper';
    } else if (choice === 'scissors') {
        return 'Scissors';
    } else {
        alert('Invalid choice. Please enter Rock, Paper, or Scissors.');
        return getHumanChoice(); 
    }
}


function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    
      
    if (humanChoice === computerChoice) {
        resultText.innerText = `It's a tie! Both chose ${humanChoice}`;
    } else if (
        (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
        (humanChoice === 'Scissors' && computerChoice === 'Paper') ||
        (humanChoice === 'Paper' && computerChoice === 'Rock')
    ) {
        resultText.innerText = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        resultText.innerText = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }
    humanScoreText.innerText = humanScore;
    computerScoreText.innerText = computerScore;

    if (humanScore >= 5) {
        resultText.innerHTML = 'You win!' + `   <button id="resetScore">Restart game</button>`;
        document.getElementById("resetScore").addEventListener('click', reset);
    } else if (computerScore >= 5) {
        resultText.innerHTML = 'The computer is the winner!' + `   <button id="resetScore">Restart game</button>`;
        document.getElementById("resetScore").addEventListener('click', reset);
    }
}

function reset() {
    humanScore = 0;
    computerScore = 0;
    humanScoreText.innerText = '';
    computerScoreText.innerText = '';
    resultText.innerHTML = '';
}

 /* function playGame() {

for (let i = 0; i < 5; i++) {
           playRound();
    }
    if (humanScore > computerScore) {
            console.log("You are the winner!");
         } else {
               console.log("Try again"); 
             }
        }*/ 
