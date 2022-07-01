
class Game {
    constructor() {
        this.attempts = 0;
        this.userGuess = "";
        this.guessesList = [];
        this.specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    }

    getRandomWord() {
        this.wordsArr = ["about", "above", "abuse", "adapt", "adult", "agent", "anger", "aisle", "apple", "award", "basis", "beach", "birth", "block", "blood", "board", "brain", "bread", "break", "brisk", "brown", "blush", "bluff", "bolts", "buyer", "cause", "chain", "chair", "chest", "chief", "child", "cable", "champ", "chalk", "clams", "claim", "class", "comet", "clock", "coach", "court", "crack", "cycle", "dance", "darts", "denim", "dryer", "duvet", "earth", "eased", "event", "exact", "equal", "fable", "fever", "fiber", "flaw", "gecko", "goofy", "hairy", "image", "itchy", "issue", "japan", "jewel", "juice", "laces", "lunch", "level", "light", "month", "mafia", "movie", "mouth", "money", "music", "match", "metal", "night", "noise", "north", "novel", "nurse", "offer", "order", "owner", "panel", "paper", "party", "peace", "phase", "phone", "pilot", "place", "plane", "plant", "plate", "point", "pound", "power", "press", "price", "pride", "prize", "proof", "queen", "radio", "range", "ratio", "reply", "right", "river", "round", "route", "rugby", "scale", "scene", "scope", "score", "shape", "share", "sheep", "shift", "shirt", "shock", "sight", "skill", "sleep", "smile", "smoke", "sound", "south", "space", "speed", "sport", "squad", "staff", "stage", "start", "state", "steel", "stock", "stone", "store", "study", "stuff", "style", "sugar", "table", "taste", "theme", "thing", "title", "total", "touch", "tower", "track", "trade", "train", "trend", "trial", "trust", "truth", "uncle", "union", "value", "video", "visit", "voice", "waste", "watch", "water", "while", "white", "woman", "world", "youth"];
        this.randomWord = this.wordsArr[Math.floor(Math.random() * this.wordsArr.length + 1) - 1];
        return this.randomWord;
    }

    checkInput() {
        this.userGuess = document.getElementById('user-guess').value.toLowerCase();

        if (this.userGuess.length !== 5 || this.specialChars.test(this.userGuess)) {
            document.querySelector('#word-length').classList.add('show');
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
            document.querySelector('#win-msg').classList.add('show');
        } else {
            this.attempts++;
        }

        if (this.attempts === 6) {
            document.querySelector('#game-over').classList.add('show');
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
            this.checkInput();
            document.getElementById('user-guess').value = "";
        })
    }

    resetButton() {
        document.querySelector('#reset-button').addEventListener('click', () => {
            document.location.reload();
            document.querySelector('main').removeChild(document.getElementById('rules'));
        })
    }

    playAgainButton() {
        const playButtons = document.querySelectorAll('.play-again');

        playButtons.forEach(element => element.addEventListener('click', () => {
            document.querySelector('#game-over').classList.remove('show');
            document.querySelector('#win-msg').classList.remove('show');
            document.location.reload();
        })
        )
    }

    gotItButton() {
        document.querySelector('#got-it-btn').addEventListener('click', () => {
            document.querySelector('#word-length').classList.remove('show');
        })
    }

    start() {
        document.querySelector('#start-btn').addEventListener('click', () => {
            document.querySelector('main').removeChild(document.getElementById('rules'));
        })
    }
}


const game = new Game();
game.start();
game.getRandomWord();
game.submitButton();
game.resetButton();
game.gotItButton();
game.playAgainButton();
