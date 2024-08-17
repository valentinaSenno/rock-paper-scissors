function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
    
    
}
const computerPlayer = getComputerChoice();

if (computerPlayer === 1) {
    console.log("Rock");
} else if (computerPlayer === 2) {
    console.log("Paper");
} else {
    console.log("Scissors");
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

console.log(getHumanChoice());

