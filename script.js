// NOT WORKING YET

        let playerSelection = () => {
            let rockPaperScissors = prompt(`Rock, Paper, Scissors? `)

            if (rockPaperScissors == 'Rock' || rockPaperScissors == 'rock') {
                return ('Rock');
            } else if (rockPaperScissors == 'Paper' || rockPaperScissors == 'paper') {
                return ('Paper');
            } else if (rockPaperScissors == 'Scissors' || rockPaperScissors == 'scissors') {
                return ('Scissors');
            } else {
                return ('Choose Rock, Paper, or Scissor');
            }
        }

        let computerPlay = () => {
            let rockPaperScissors = Math.floor((Math.random() * 100) + 1);

            if (rockPaperScissors < 33) {
                return ('rock');
            } else if (rockPaperScissors >= 33 && rockPaperScissors < 66) {
                return ('paper');
            } else {
                return ('scissors');
            }
        }

        let round = () => {
            let playerChoice = playerSelection();
            let computerChoice = computerPlay();

            if (playerChoice == computerChoice) {
                return (`It's a tie`);
            } else if (playerChoice == 'Rock' && computerChoice == 'paper') {
                return ('Paper beats Rock, you lose');
            } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
                return ('Rock beats Scissors, you win');
            } else if (playerChoice == 'paper' && computerChoice == 'rock') {
                return ('Paper beats Rock, you win');
            } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
                return ('Scissors beats Paper, you lose');
            } else if (playerChoice == 'scissors' && computerChoice == 'rock') {
                return ('Rock beats Scissors, you lose');
            } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
                return ('Scissors beats Paper, you win');
            } else {
                return ('Illegal character(s), Rock, Paper, Scissors');
            }
        }

