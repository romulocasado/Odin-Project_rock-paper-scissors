const choices = ["rock","paper","scissors"];
const winners = [];

    // plays the game
    // plays five rounds
    /*
    of course we could just type like this

        playRound();
        playRound();
        playRound();
        playRound();
        playRound();

    but this is not good practice, as we can't repeat ourselves, so let's prepare a for loop...
    */
   function game() {
       for (let i = 1; i <= 5; i++) {
           playRound(i);
       }      
       document.querySelector('button').textContent = "Start again";
       logWins();
   }

function playRound (round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);


}

function playerChoice (){
    // player input here
    let input = prompt("Type Rock, Paper or Scissors");     
    while (input == null) {
        input = prompt("Type Rock, Paper or Scissors");
    }    
    // input changing to lower case
    input = input.toLowerCase();
    // creating the variable check, for cleaner view
    let check = validateInput(input);
    // checking the truthness of the input, so if the user enters a wrong answer, the input will loop until the user type it correctly
    while (check == false) {
        input = prompt (
            "Type Rock, Paper or Scissors. Capitalization doesn't matter"   
        );
        while (input == null) {
            input = prompt("Type Rock, Paper or Scissors");
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}

function computerChoice () {
    // random computer input here
    return choices[Math.floor(Math.random()*choices.length)]
}


    // to check if the input is correctly used, the first non simple way is to write this way

            /*
            function validateInput(choice) {
                if (choices.includes(choice)) {
                    return true
                }   else {
                    return false
                }
            }
            */
    // of course, there's a cleaner way

function validateInput(choice) {
    return (choices.includes(choice));
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return "Tie";
    } 
    // In this moment, we could write the long way, wich goes as follows 
    /*

    else if (choiceP === "Rock" && choiceC === "scissors") {
        return "Player"
    }
    else if (choiceP === "scissors" && choiceC === "paper") {
        return "Player"
    }

    */
   // But, a cleaner way is to use the boolean rules of && and || togheter... take a look
   else if (
       (choiceP === "rock" && choiceC == "scissors") ||
       (choiceP === "paper" && choiceC == "rock") ||
       (choiceP === "scissors" && choiceC == "paper")
   ) {
       return "Player";
   }   else {
       return "Computer";
   }
}
// logging the results
function logWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("Results:");
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties:", ties); 
}

// logging the round

function logRound(playerChoice, computerChoice, winner, round) {
    console.log("Round:", round)
    console.log("Player chose:", playerChoice) 
    console.log("Computer chose:", computerChoice)
    console.log(winner, 'Won the round!') 
    console.log("--------------------------")
}