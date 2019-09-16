let getUserChoice = function(userInput){
    userInput = userInput.toLowerCase()
   if (userInput === 'bear' || userInput === 'human' || userInput ==='gun') {
       return userInput
   } else {
       console.log('error message')
   }
}

// console.log(getUserChoice('bear'))
// console.log(getUserChoice('Human'))
// console.log(getUserChoice('gun'))

let getComputerChoice = function(){
    let randomNumber = Math.floor(Math.random() * 3)
    if( randomNumber === 0){
        return 'bear'
    } else if ( randomNumber === 1) {
        return 'human'
    } else {
        return 'gun'
    }
}
// console.log(getComputerChoice())

let determineWinner = function(userChoice, computerChoice){
    if (userChoice === computerChoice){
        return 'The game is a tie'
    }
    if (userChoice === 'human'){
        if (computerChoice === 'bear'){
            return 'The computer won'
        }
        else  {
            return 'The user won'
        }
    }

    if (userChoice === 'bear'){
        if (computerChoice === 'gun'){
            return 'The computer won'
        }
        else {
            return 'The user won'
        }
    }

    if(userChoice === 'gun'){
        if(computerChoice === 'human'){
            return 'The computer won'
        }
        else {
            return 'The user won'
        }
    }
}

// console.log(determineWinner('bear', 'human'))

let playGame = function(){
    let promptUserChoice = prompt ('please choose bear, human, or gun')
    let userChoice =getUserChoice(promptUserChoice)
    let computerChoice = getComputerChoice()
    console.log(userChoice)
    console.log(computerChoice)
    console.log(determineWinner(userChoice, computerChoice))
}

playGame()




