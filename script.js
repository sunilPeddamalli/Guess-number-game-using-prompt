
// let maxNumber = parseInt(prompt('Enter a number'));

// while (!maxNumber) {
//     maxNumber = parseInt(prompt('Enter a valid number'));
// }

let targetNumber = Math.floor(Math.random() * 20 + 1);
console.log(targetNumber);

let guess = parseInt(prompt('Enter your first guess between 1 and 20'))

while (!guess) {
    guess = parseInt(prompt('Enter a valid number'));
}

let attempt = 1;

while (parseInt(guess) !== targetNumber) {
    attempt++;
    if (guess > targetNumber) {
        guess = prompt('Too high. Try again');
    }
    else if (guess < targetNumber) {
        guess = prompt('Too low. Try again');
    } else {
        guess = prompt('Enter a valid Number');
    }
    if (guess === 'q') break;
}

if (guess === 'q') alert('You quit');
if (parseInt(guess) === targetNumber) alert(`You guessed it right after ${attempt} try`);

