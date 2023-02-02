let result = 0;
let score = 0;
let activePlayer = 0;
let currentScore = [0, 0];

const screenWidth = window.innerWidth;

function rollDice(){  
    let current = document.getElementById(`current${activePlayer}`)
    score = Math.floor(Math.random() * 6) + 1 
        
    if(score === 1){
        current.textContent = 0;
        changePlayer();
        swal('Perdu!', 'Joueur'+ (activePlayer + 1) +' à vous !', 'warning')
    
    }else{
        result += score;
        current.textContent = result;
        if (screenWidth > 768){
            dice.innerHTML = `<img src="/assets/images/dice${score}.png" alt="dice ${score}">`;
        } 
    }        
}



function holdFunction(){
    let playerScore = document.getElementById(`scorep${activePlayer}`);
    currentScore[activePlayer] += result;
    playerScore.textContent = currentScore[activePlayer];

    if (currentScore[activePlayer] >= 100){
        rolldice.disabled = true;
        hold.disabled = true;
        newgamebtn.classList.add('newgameAnimation');
        swal('Félicitation au joueur ' + (activePlayer +1) +'!!!!!', 'success');
    
    }else{
        changePlayer();
        swal('Score sauvegardé !', 'Joueur' +(activePlayer + 1) + ' à vous !', 'success');
    } 
}


function changePlayer(){
    result= 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle("active-player");
    player1.classList.toggle("active-player");
    play1.classList.toggle("active-color");
    play2.classList.toggle("active-color");
};



rolldice.addEventListener('click', ()=>{
    rollDice();
})



hold.addEventListener('click', () =>{
    let current = document.getElementById(`current${activePlayer}`)
    holdFunction();
    current.textContent = 0;
})



newgame.addEventListener('click', ()=>{
    location.reload();
})

