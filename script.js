

function computerPlay(){

    let pointer = Math.floor(Math.random()*3);

    
    

    if (pointer == 0) {
        console.log('Computer chose Rock');
        return 'Rock';
    }
    else if (pointer == 1) {
        console.log('Computer chose Papers');
        return 'Papers';
    }
    else {
        console.log('Computer chose Scissors');
        return 'Scissors';
    }
}



function playRound(playerSelection, computerSelection) {
    
    let p = playerSelection.toUpperCase();
    let c = computerSelection.toUpperCase();
    

    if (p == c) {
        console.log('It\'s a draw!');
        return -1;
    }
    else if(p == 'ROCK' && c == 'PAPERS') {
        console.log('Computer Wins!');
        return 0;
    }
    else if(p == 'ROCK' && c == 'SCISSORS') {
        console.log('Player Wins!');
        return 1;
    }
    else if(c == 'ROCK' && p == 'PAPERS') {
        console.log('Player Wins!');
        return 1;
    }
    else if(c == 'ROCK' && p == 'SCISSORS') {
        console.log('Computer Wins!');
        return 0;
    }
    else if (p == 'PAPER' && c == 'SCISSORS') {
        console.log('Computer Wins');
        return 0;
    }
    else {
        console.log('Player Wins')
        return 1; 
    }
    
  }

function game() {
    let playerScore=0;
    let computerScore=0;
    
    for (i=0; i<5; i++) {
        let playerSelection=prompt('Enter your choice:');
        let computerSelection=computerPlay();

        playRound(playerSelection,computerSelection);

        if(playRound(playerSelection,computerSelection)==0) {
            computerScore+=1;
            
        }
        else if(playRound(playerSelection,computerSelection)==1) {
            playerScore+=1;
        }

        console.log('Player: '+ playerScore+'-'+computerScore+':Computer');
    }
    
}

game()
