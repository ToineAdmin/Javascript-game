let result = 0;
let score = 0;
const dice3 = document.createElement('img');
dice3.src = "/assets/images/dice3.png";



rolldice.addEventListener('click', ()=>{
    score = Math.floor(Math.random() * 6) + 1 
    if(score === 1){
        result= 0;
    }else{
        result = result + score;
    }


    // INSERER IMAGE A CHAQUE LANCER 
    // scorep1.textContent = result;
    // if (score = 3){
    //   dice.innerHtml= dice3  
    // }
    
})


