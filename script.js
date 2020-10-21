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