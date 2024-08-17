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
    if (choice.toLowerCase() === "rock") {
        return "Rock";
    } else if (choice.toLowerCase() === "paper") {
        return "Paper";
    } else if (choice.toLowerCase() === "scissors") {
        return "Scissors";
    } else {
        alert('Invalid choice. Please enter Rock, Paper, or Scissors.');
        return getHumanChoice();
    }
}

console.log(getHumanChoice());

