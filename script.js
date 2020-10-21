/*
Understand the Problem
We're creating a rock, paper, scissors game that's playable in the console. The user inputs rock, paper, or scissors and the computer randomly generates rock, paper, or scissors. Then the algorithm will compare the user response and the computer response and output who won.

Plan
Does your program have a user interface? 
No, it will be playable from the console.

What inputs will your program have? 
The user will input rock, paper, scissors, any other response results in an error.

What's the desired output?
After the user inputs rock, paper, or scissors, the computer will randomly generate a counter-response and then the responses will be compared and will output if the user won, lost, or drew the game.

Given your inputs, what are the necessary steps to return the desired output?
When a user chooses rock, paper, or scissors
The algorithm will compare the user input with the computers input
if the user's input is the same as the computer's input, output "it's a draw"
if the user's input is different
then if the user win's output "you won"
else output "you lost"

Divide and Conquer (Implement)
Store Output of a prompt on the console, "Please choose Rock, Paper, or Scissors", into a LET
Create a computer response, it has to be random 
Create a function to compare the computer response and the user response which will output who won
Same response equals "draw"
Computer Response/User Response
Rock/Paper || Paper/Scissors || Scissors/Rock == 'You win'
Rock/Scissors || Paper/Rock || Scissors/Paper == 'You lose'
*/

let userResponse = () => {
    let response = prompt(`Choose Rock, Paper, or Scissors: `).toLowerCase();
    if (response == 'rock') {
        return ('rock');
    } else if (response == 'paper') {
        return ('paper');
    } else if (response == 'scissors') {
        return ('scissors');
    } 
    return response;
}

let computerResponse = () => {
    let randomResponse = Math.floor(Math.random() * 101);
    if (randomResponse <= 33) {
        return ('rock');
    } else if (randomResponse > 33 && randomResponse <= 66) {
        return ('paper');
    } else {
        return ('scissors');
    }
}

let compareResponses = () => {
    let user = userResponse();
    let computer = computerResponse();
    if (computer == user) {
        alert(`It's a draw`);
    } else if (computer == 'rock' && user == 'paper') {
        alert('Paper beats Rock, You Win');
    } else if (computer == 'paper' && user == 'scissors') {
        alert('Scissors beats Paper, You Win');
    } else if (computer == 'scissors' && user == 'rock') {
        alert('Rock beats Scissors, You Win');
    } else if (computer == 'rock' && user == 'scissors') {
        alert('Rock beats Scissors, You Lose');
    } else if (computer == 'paper' && user == 'rock') {
        alert('Paper beats Rock, You Lose');
    } else if (computer == 'scissors' && user == 'paper') {
        alert('Scissors beats Paper, You Lose');
    } else {
        alert('Illegal Character(s)');
    }
}