

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
    else if (p == 'PAPERS' && c == 'SCISSORS') {
        console.log('Computer Wins');
        return 0;
    }
    else if (c == 'PAPERS' && p == 'SCISSORS') {
        console.log('Player Wins')
        return 1; 
    }
    
  }



function game(playerSelection,computerSelection) {

    let computerScore=0;
    let playerScore=0;
    

        if(playRound(playerSelection,computerSelection)==0) {
            return 1;
            
        }
        else if(playRound(playerSelection,computerSelection)==1) {
            return 0;
        }

        

        

        
   
}




let buttons=document.querySelectorAll('button');
let display=document.querySelector('.display');
let computerScore=0;
let playerScore=0;
let score1=document.querySelector('.result1');
let score2=document.querySelector('.result2');


buttons.forEach(function (i) {
    i.addEventListener('click', () => {

        let c=computerPlay();
        playRound(i.className,c);
        let gam = game(i.className,c)
        if (gam==1){
            computerScore+=1;
            
        }
        else if(gam==0){
            playerScore+=1;
            
        }
        if(computerScore == 5 || playerScore == 5) {
            computerScore=0;
            playerScore=0;
            
            
        }
        score1.innerHTML='Player score: '+playerScore;
        score2.innerHTML='Computer score: '+computerScore;
        
        


       if(i.className=='rock') {
            document.querySelector('.msg1').innerHTML='Player\'s choice: '+i.innerHTML;
            document.querySelector('.msg2').innerHTML='Computer\'s choice: '+c;
        }
        else if(i.className=='papers') {
            document.querySelector('.msg1').innerHTML='Player\'s choice: '+i.innerHTML;
            document.querySelector('.msg2').innerHTML='Computer\'s choice: '+c;
        }
        else if(i.className=='scissors') {
            document.querySelector('.msg1').innerHTML='Player\'s choice: '+i.innerHTML;
            document.querySelector('.msg2').innerHTML='Computer\'s choice: '+c;
            
        }


        
        
    });
});


