const reveals = document.querySelectorAll('.reveal');
document.addEventListener('scroll', showReveal);
function showReveal() {
    reveals.forEach(reveal => {       
        if (reveal.getBoundingClientRect().top < window.innerHeight
         && reveal.getBoundingClientRect().bottom > 0) {
            reveal.classList.add("reveal_active")
        } else {
            reveal.classList.remove("reveal_active")
        }
    });
}