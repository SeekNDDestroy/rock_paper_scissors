let humanScore = 0,
    computerScore = 0

let getComputerChoice = () => {
    return Math.floor(Math.random() * 3 + 1)
}

let getHumanChoice = () => {
    while(1){
        let choice = prompt("Enter a number")
        if(choice < 4 && choice > 0){
            return choice
        }else{
            console.log("invalid number");
        }
    }
}

function playRound(computer, human){

    if(human === computer){
        console.log("It's a draw")
    }
    else if((human === 1 && computer === 3) ||
     (human === 2 && computer === 1) ||
    (human === 3 && computer === 2)){
        console.log("human won");
        humanScore += 1
    }
    else{
        console.log("computer won");
        computerScore += 1
    }
}

function playGame(){
    let count = 0;
    while(count < 4){
        playRound(getComputerChoice(), parseInt(getHumanChoice()))
        count += 1
    }
}

playGame()

console.log("human",humanScore);
console.log("computer",computerScore);

if(humanScore === computerScore){
    console.log("game is draw");
}
else if(humanScore > computerScore){
    console.log("human won the game");
}else{
    console.log("computer won the game");
}