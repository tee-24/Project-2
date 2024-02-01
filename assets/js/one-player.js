

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