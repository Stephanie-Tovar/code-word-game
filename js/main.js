
class Game {
    constructor() {
        this.attempts = 0;
        this.userGuess = "";
        this.guessesList = [];
    }

    getRandomWord() {
        this.wordsArr = ["about", "above", "adapt", "aisle", "brisk", "blush", "bluff", "bolts", "cable", "champ", "chalk", "clams", "comet", "crack", "cycle", "dance", "darts", "denim", "dryer", "duvet", "earth", "eased", "event", "exact", "equal", "fable", "fever", "fiber", "flaw", "gecko", "goofy", "hairy", "image", "itchy", "issue", "japan", "jewel", "juice", "laces", "lynch", "mafia", "movie"];
        this.randomWord = this.wordsArr[Math.floor(Math.random() * this.wordsArr.length + 1) - 1];
        return this.randomWord;
    }

    checkInputLength() {
        this.userGuess = document.getElementById('user-guess').value;

        if (this.userGuess.length !== 5) {
            window.alert("You will need a 5-letter word to play this game!");
            return;
        }

        this.guessesList.push(this.userGuess);
        this.checkAttempts();
        this.displayUserInput();
        this.checkAnswer();
    }

    checkAttempts() {
        if (this.randomWord === this.userGuess) {
            this.attempts = 0;
            console.log("Awesome! Your are good at this");
        } else {
            this.attempts++;
        }

        if (this.attempts === 6) {
            document.querySelector('#game-over').style.display = 'block';
            console.log("Game over! Maybe next time")
        }
    }

    displayUserInput() {
        let row = document.querySelectorAll('.row');
        for (let i = 0; i < this.guessesList.length; i++) {
            for (let j = 0; j < this.guessesList[i].length; j++) {
                row[i].children[j].innerHTML = this.guessesList[i][j];
            }
        }
        return this.userGuess;
    }

    checkAnswer() {
        console.log(this.randomWord);


        for (let i = 0; i < this.guessesList.length; i++) {
            for (let j = 0; j < this.guessesList[i].length; j++) {
                if (this.randomWord[j] === this.guessesList[i][j]) {
                    document.querySelectorAll(`.cell${i + 1}`)[j].style.background = "#689B65";
                } else if (this.randomWord.includes(this.guessesList[i][j])) {
                    document.querySelectorAll(`.cell${i + 1}`)[j].style.background = "#F4C564";
                } else {
                    document.querySelectorAll(`.cell${i + 1}`)[j].style.background = "#A09D96";
                }
            }
        }
    }


    submitButton() {
        document.querySelector('#submit-button').addEventListener('click', (event) => {
            event.preventDefault();
            this.checkInputLength();
            document.getElementById('user-guess').value = "";
        })
    }

    resetButton() {
        document.querySelector('#reset-button').addEventListener('click', () => {
            document.location.reload();
        })
    }

    playAgainButton() {
        document.querySelector('#play-again').addEventListener('click', () => {
            document.location.reload();
        })
    }

}


const game = new Game();
game.getRandomWord();
game.submitButton();
game.resetButton();
