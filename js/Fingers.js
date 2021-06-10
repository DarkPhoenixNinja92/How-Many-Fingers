let fingerNum = () => {
    let userInput = parseFloat(prompt("Please enter a number."));
    let genInput = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    let count = 0;
    while (Number.isNaN(userInput) == true) {
        alert("Invalid value! Please try again.");
        userInput = parseFloat(prompt("Please enter a number."));
        if (count >= 3) {
            alert("Too many wrong guesses! Changing the number.");
            genInput = Math.floor(Math.random() * (10 - 1 + 1) + 1);
        }
    }
    while (userInput != genInput) {
        if (userInput > genInput) {
            alert("Incorrect. Guess was too high!");
        } else {
            alert("Incorrect. Guess was too low!");
        }
        userInput = parseFloat(prompt("Please enter a number."));
        count += 1;
    }
    alert("Great job! You got it right.");
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("guess").addEventListener('click', fingerNum);
})