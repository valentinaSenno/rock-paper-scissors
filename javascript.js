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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}`);
    } else if (
        (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
        (humanChoice === 'Scissors' && computerChoice === 'Paper') ||
        (humanChoice === 'Paper' && computerChoice === 'Rock')
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

playRound();
