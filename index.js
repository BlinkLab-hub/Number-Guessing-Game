let guess;
let limit1 = Math.floor((Math.random() * 100) + 1);
let limit2 = Math.floor((Math.random() * 100) + 1);
let upperLimit = Math.max(limit1, limit2);
let lowerLimit = Math.min(limit1, limit2);
let correctGuess = Math.floor(Math.random() * (upperLimit - lowerLimit + 1) + lowerLimit);
let maxTrials = 10;
let trials = 0;
let running = true;
window.alert(`🎮🎮🎮WELCOME TO THE NUMBER GUESSING GAME🎮🎮🎮`);
while(running) {
    trials++;
    guess = window.prompt(`Enter a number between ${lowerLimit} and ${upperLimit}.`);
    guess = Number(guess);
    if(trials <= maxTrials){
        if(guess > upperLimit || guess < lowerLimit) {
            window.alert(`${guess} is out of range! You have ${maxTrials - trials}trials left`);
        }
        else if(guess > (correctGuess + 10)) {
            window.alert(`${guess} is too high! You have ${maxTrials - trials}trials left`);
        }
        else if(guess < (correctGuess - 10)) {
            window.alert(`${guess} is too low! You have ${maxTrials - trials}trials left`);
        }
        else if(guess >= (correctGuess - 5) && (guess < correctGuess - 3)) {
            window.alert(`${guess} is low! You have ${maxTrials - trials}trials left`);
        }
        else if(guess <= (correctGuess + 5) && (guess > correctGuess + 3)) {
            window.alert(`${guess} is high! You have ${maxTrials - trials}trials left`);
        }
        else if(guess >= (correctGuess - 3) && (guess < correctGuess)) {
            window.alert(`${guess} is close! You have ${maxTrials - trials}trials left`);
        }
        else if(guess <= (correctGuess + 3) && (guess > correctGuess)) {
            window.alert(`${guess} is close! You have ${maxTrials - trials}trials left`);
        }
        else if(isNaN(guess)) {
            window.alert(`Invalid input! The guess must me a valid number. You have ${maxTrials - trials}trials left`)
        }
        else if(guess == correctGuess) {
            window.alert(`You WIN🎉! ${guess} was the correct guess.`);
            running = false;
        }
        else{
            window.alert(`${guess} is about close! You have ${maxTrials - trials}trials left`);
        }
    }
}
window.alert(`GAME OVER! Refresh page to restart game🎮. Bye👋🏻\nCreated by Sudaice`);
