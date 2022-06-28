
class Game {
    constructor() {
        this.counter = 0;
    }

    getRandomWord() {
        this.wordsArr = ["about", "above", "adapt", "aisle", "brisk", "blush", "bluff", "bolts", "cable", "champ", "chalk", "clams", "comet", "crack", "cycle", "dance", "darts", "denim", "dryer", "duvet", "earth", "eased", "event", "exact", "equal", "fable", "fever", "fiber", "flaw", "gecko", "goofy", "hairy", "image", "itchy", "issue", "japan", "jewel", "juice", "laces", "lynch", "mafia", "movie"];
        this.randomWord = this.wordsArr[Math.floor(Math.random() * this.wordsArr.length + 1) - 1];
        return this.randomWord;
    }

    getUserInput() {
        this.userGuess = document.getElementById('user-guess').value;
        // this.guessArr = this.userGuess.split("");

        for (let i = 0; i < this.userGuess.length; i++) {
            let cell = document.querySelectorAll('.cell')[i].innerHTML = this.userGuess[i];
        }

        return this.userGuess;
    }

    checkAnswer() {
        console.log(this.randomWord);

        if (this.randomWord === this.userGuess) {
            this.counter = 0;
            console.log("Awesome! Your are good at this");
        } else {
            this.counter++;
            console.log("Nope! Keep trying");
        }

        if (this.counter === 6) {
            console.log("Game over! Maybe next time")
        }
        console.log(this.counter);
        for (let i = 0; i < 5; i++) {
            if (this.randomWord.includes(this.userGuess[i])) {
                document.querySelectorAll('.cell')[i].style.background = "#F4C564";
            } else {
                document.querySelectorAll('.cell')[i].style.background = "#A09D96";
            }
        }
    }

    submitButton() {
        document.querySelector("#submit-button").addEventListener("click", (event) => {
            event.preventDefault();
            this.getUserInput();
            this.checkAnswer();
        })
    }

    resetButton() {
        document.querySelector("#reset-button").addEventListener("click", (event) => {
            event.preventDefault();
            this.counter = 0;
        })
    }





}


const game = new Game();
game.getRandomWord();
game.submitButton();
game.resetButton();
