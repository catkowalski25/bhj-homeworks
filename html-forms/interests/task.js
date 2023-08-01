const checkboxes = document.querySelectorAll('.interest__check');

checkboxes.forEach(checkbox =>{
   checkbox.addEventListener('change', checkChild);
})

function checkChild(event){
   let state = this.checked;
   let childrens = this.closest(".interest").querySelectorAll('ul .interest__check');
   childrens.forEach(children => children.checked = state);
}