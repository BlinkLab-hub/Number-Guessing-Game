let guessInput = document.getElementById("guess");
let button = document.getElementById("btn");
let feedback = document.getElementById("feedback");
let limit1 = Math.floor(Math.random() * 100 + 1);
let limit2 = Math.floor(Math.random() * 100 + 1);
let upperLimit = Math.max(limit1, limit2);
let lowerLimit = Math.min(limit1, limit2);
let instruction = document.getElementById("instruction");
let trial = 0;
let maxTrials = 10;  /* Math.floor(((upperLimit - lowerLimit) / upperLimit) * 10) */
let number = Math.floor(Math.random() * (upperLimit - lowerLimit + 1) + lowerLimit);
instruction.textContent = `Guess a number between ${lowerLimit} and ${upperLimit}`;
    button.onclick = function() {
        let guess = guessInput.value;
        guess = Number(guess);
        trial++;
        if(trial > maxTrials) {
            feedback.textContent = `🎮🎮🎮GAME OVER🎮🎮🎮\nYOU LOSE! You are out of trials. The correct guess was ${number}.\nRefresh page to restart the game.`;
            button.disabled = true;
            return;
        }
        else{
            if(isNaN(guess)) {
                feedback.textContent = `invalid input! Your guess is not a number. you have ${maxTrials - trial}trial(s) left`;
            }
            else if(guess === number) {
                feedback.textContent = `🎮🎮🎮GAME OVER🎮🎮🎮\nCongratulations! You WON🎉. ${guess} is the correct guess\nRefresh page to restart the game.`;
                button.disabled = true;
                return;
            }
            else if(guess > upperLimit || guess < lowerLimit){
                feedback.textContent = `${guess} is out of range. You have ${maxTrials - trial} trial(s) left!`;
            }
            else if(guess >= (number + 10)) {
                feedback.textContent = `${guess} is too high. You have ${maxTrials - trial} trial(s) left!`;
            }
            else if(guess <= (number - 10)) {
                feedback.textContent = `${guess} is too low. You have ${maxTrials - trial} trial(s) left!`;
            }
            else if(guess >= (number + 5)) {
                feedback.textContent = `${guess} is high. You have ${maxTrials - trial} trial(s) left!`;
            }
            else if(guess <= (number - 5)) {
                feedback.textContent = `${guess} is low. You have ${maxTrials - trial} trial(s) left!`;
            }
            else if(guess > number) {
                feedback.textContent = `${guess} is high but close. You have ${maxTrials - trial} trial(s) left!`;
            }
            else if(guess < number) {
                feedback.textContent = `${guess} is low but close. You have ${maxTrials - trial} trial(s) left!`;
            }
        }
            
    }
