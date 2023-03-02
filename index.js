let score = 0;



const holes = document.getElementsByClassName("hole");


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

setInterval(function(){
    holes[getRandomInt(0,holes.length)].classList.toggle("mole");;
}, 300);

const gameArea = document.getElementById('whack-a-mole');
gameArea.addEventListener('click', function(clickEvent) {
  if (clickEvent.target.matches('.mole')) {
    score++;
    // 
    document.getElementById("score").innerHTML = score;
    clickEvent.target.classList.remove('mole');
  }
});