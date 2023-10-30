
let player;
let computer;

function startgame(buttonId){
    const playerText = document.querySelector("#playerText");
    const computerText = document.querySelector("#computerText");
    const resultsText = document.querySelector("#resultsText");
    player = buttonId;
    compute();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent =` Computer: ${computer}`;
    resultsText.textContent = Winner();
}


function compute(){
    const randomNum = Math.floor(Math.random() * 3) + 1;

    switch(randomNum){
      case 1:
        computer = "Rock";
        break;
      case 2:
        computer = "Paper";
        break;
      case 3:
        computer = "Scissors";
        break;
    }
}
function Winner(){
    if(player == computer){
      return "Draw!";
    }
    else if(computer == "Rock") { 
        if (player == "Paper") {
            return "You Win!";
        }
        else {
            return "You Lose!";
        }
    }
    
    else if(computer =="Paper"){
        if (player == "Scissors"){
            return "You Win!"; 
        }
        else {
            return "You Lose!";
        }
    }

    else if(computer == "Scissors"){
        if (player == "Rock"){
            return "You Win!";
        }
        else  {
            return "You Lose!";
        }
     
    }
}