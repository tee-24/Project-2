

// Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", () => {
    runGame();

    // Add event listener to play again button
    let reset = document.getElementById('reset');
    reset.addEventListener('click', () => {
        toggle();

        // let clearDisplay = document.getElementsByClassName('display')[0];
        clearDisplay.innerHTML = `<p id="user-choice"></p>
    <p id="computer-choice"></p>
    <p id="result"></p>`;
    });
});
/** Get user choice and display it */
function getUserChoice() {

    for (let choice of choices) {
        choice.addEventListener('click', () => {
            userChoice = (choice.textContent).toLowerCase();
            console.log(userChoice);
            document.getElementById('user-choice').textContent = `You chose: ${userChoice}`;
            displayComputerChoice();
            checkWinner();
            displayResult();
        })
    }
}

/** Get computer choice 
 * and display
 */
function displayComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];

    computerChoice = options[Math.floor(Math.random() * 3)];
    console.log(computerChoice);

    let display = document.getElementById('computer-choice');
    display.textContent = `Computer chose: ${computerChoice}`;
}

function checkWinner() {

    if (userChoice === computerChoice) {
        result = "It's a Tie!";
    } else {
        switch (userChoice) {
            case 'rock':
                result = (computerChoice === 'paper') ? "You lost!" : "You win!";
                break;
            case 'paper':
                result = (computerChoice === 'scissors') ? "You lost!" : "You win!";
                break;
            case 'scissors':
                result = (computerChoice === 'rock') ? "You lost!" : "You win!";
        }
    }
    if (result === "You win!") {
        outcome.style.color = 'green'
        incrementUserScore();
    } else if (result === "You lost!") {
        incrementComputerScore();
        outcome.style.color = 'red'
    } else {
        outcome.style.color = 'white'
    }
}
function displayResult() {
    console.log(result)
    console.log(clearDisplay)
    outcome.textContent = `${result}`;
    toggle();
}
/** 
 * Gets the user score from the DOM and increments it by 1 
 */
function incrementUserScore() {
    let userScore = parseInt(document.getElementById('user-score').innerText);
    document.getElementById('user-score').innerText = ++userScore;
}

/** 
 * Gets the computer score from the DOM and increments it by 1 
 */
function incrementComputerScore() {
    let computerScore = parseInt(document.getElementById('computer-score').innerText);
    document.getElementById('computer-score').innerText = ++computerScore;
}

/** Disable the button after it has been clicked */
function toggle() {
    for (let choice of choices) {
        if (choice.disabled === true) {
            choice.disabled = false;
        } else {
            choice.disabled = true;
        }
    }
}