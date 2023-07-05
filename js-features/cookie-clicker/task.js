const cookie = document.getElementById('cookie');
let prevTime = new Date;
console.log (prevTime.getSeconds(),prevTime.getMilliseconds())
cookie.onclick = function (){
const counter = document.getElementById('clicker__counter');
const speedCounter = document.getElementById('clicker__speedCounter');
counter.textContent = +counter.textContent + 1;
let currTime = new Date;
speedCounter.textContent = (1 / ((currTime - prevTime) / 1000)).toFixed(2);
prevTime = currTime;
cookieWidth = cookie.width;
cookieHeight = cookie.height
cookie.width += 50;
cookie.height += 50;

setTimeout(()=>{
    cookie.width = cookieWidth;
    cookie.height = cookieHeight;
}, 100)
}
