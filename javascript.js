function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
    
    
}
const computerPlayer = getComputerChoice();

if (computerPlayer === 1)
    console.log("Rock");
    else if (computerPlayer === 2) {
        console.log("Paper");
} else {
    console.log("Scissors");
}
