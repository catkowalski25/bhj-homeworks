let tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener("click", clickTab)
});

function clickTab(event) {
    tabs.forEach(tab => tab.classList.remove("tab_active"));
    event.target.classList.add("tab_active");
    console.log(event);
    console.log(event.target);
}