let dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    dropdown.addEventListener("click", clickDropdown)
});
function clickDropdown(event) {
   let clicked = event.target;
   let value = this.querySelector('.dropdown__value');
   clicked.closest('.dropdown__list').classList.toggle('.dropdown__list-active');
   value.innerHTML = clicked.innerHTML;
}