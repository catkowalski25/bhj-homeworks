function showMenu () {
    let a = this.firstElementChild;
    let menuSub = a.nextElementSibling;
    if (menuSub){
        a.href = "javascript:void";
        if (menuSub.className.includes(" menu_active")){
            menuSub.className = menuSub.className.replace(" menu_active", "");
        } else {
            menuSub.className += " menu_active"
            return false
        }
    }
}
let menuItem = Array.from(document.querySelectorAll('.menu_main>li'));
menuItem.forEach(li => li.onclick = showMenu);