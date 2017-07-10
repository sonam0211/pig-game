var scores, roundScore,activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;



document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

document.querySelector('.btn-roll').addEventListener('click',function(){
    var dice = Math.floor(Math.random()*6)+1; 
    var roll = document.querySelector('.dice');
    roll.style.display = 'inline-block';

    roll.src = 'dice-'+ dice +'.png';
    if (dice!==1){
        roundScore +=dice;
        document.querySelector('#current-' + activePlayer).textContent=roundScore;
    }
    else{
        nextPlayer();
    }

});
document.querySelector('.btn-hold').addEventListener('click',function(){
    scores[activePlayer] +=roundScore;
    document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];
    // nextPlayer();
    if (scores[activePlayer]>=20){
        document.querySelector('#name-'+activePlayer).textContent = "WINNER!!";
    }
    else{
        nextPlayer();
    }
    

});

function nextPlayer(){
    roundScore =0;
    document.querySelector('#current-' + activePlayer).textContent=roundScore;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector(".player-0-panel").classList.toggle('active');
    document.querySelector(".player-1-panel").classList.toggle('active');
    document.querySelector('.dice').style.display='none';

}
