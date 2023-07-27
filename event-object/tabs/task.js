let tabs = document.querySelectorAll('.tab');
let conntents = document.querySelectorAll('.tab__content');
tabs.forEach(tab => {
    tab.addEventListener("click", clickTab)
});

function clickTab(event) {
    let currentIndex;
    tabs.forEach((tab, index) => {
        tab.classList.remove("tab_active");
        if (tab === event.target){currentIndex = index}
    });
    conntents.forEach(conntent => conntent.classList.remove("tab__content_active"));
    event.target.classList.add("tab_active");
    conntents[currentIndex].classList.add("tab__content_active");
}