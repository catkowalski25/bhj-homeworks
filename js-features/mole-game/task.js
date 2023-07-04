const deadSpan = document.getElementById('dead');
const lostSpan = document.getElementById('lost');
let deadCounter = + deadSpan.textContent;
let lostCounter = + lostSpan.textContent;
function holeClick(){
   if (deadCounter>4){
    alert("Win");
    deadCounter = 0; 
    lostCounter = 0;
}
}