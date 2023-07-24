let dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    dropdown.addEventListener("click", clickDropdown)
});
function clickDropdown(event) {
   let clicked = event.target;
   let value = this.querySelector('.dropdown__value');
   let ul = this.querySelector('.dropdown__list');
   ul.classList.toggle('dropdown__list_active');
   if (clicked !== ul){value.innerHTML = clicked.textContent};
   event.preventDefault();
}