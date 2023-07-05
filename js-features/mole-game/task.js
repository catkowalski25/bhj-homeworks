const deadSpan = document.getElementById('dead');
const lostSpan = document.getElementById('lost');

function holeClick(){
    let deadCounter = + deadSpan.textContent;
    let lostCounter = + lostSpan.textContent;
    
    if (this.className.includes('hole_has-mole')){
        deadCounter++
    } else {
        lostCounter++
    }

    if (deadCounter > 9){
        alert("Победа!");
        deadSpan.textContent = 0; 
        lostSpan.textContent = 0;
    }else if(lostCounter > 4){
        alert("Вы проиграли(");
        deadSpan.textContent = 0; 
        lostSpan.textContent = 0;
    } else {
        deadSpan.textContent = deadCounter;
        lostSpan.textContent = lostCounter;
    }

}

for (let index = 1; index < 10; index++) {
    document.getElementById(`hole${index}`).onclick = holeClick;    
}