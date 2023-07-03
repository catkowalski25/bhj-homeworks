const timer = document.getElementById('timer');
let currentTimer = + timer.textContent
let intervalId = setInterval(()=>{
    if (currentTimer <= 0){
        clearInterval(intervalId);
        alert("Вы победили в конкурсе");
        return;
    }
    currentTimer--;
    timer.textContent = currentTimer;
}, 1000);
