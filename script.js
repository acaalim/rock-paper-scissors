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
                return ('Rock');
            } else if (rockPaperScissors >= 33 && rockPaperScissors < 66) {
                return ('Paper');
            } else {
                return ('Scissors');
            }
        }

        let round = () => {
            let playerChoice = playerSelection();
            let computerChoice = computerPlay();

            if (playerChoice == computerChoice) {
                return (`It's a tie`);
            } else {
                console.log('I like');
            }
        }

