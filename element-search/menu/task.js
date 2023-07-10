function showMenu () {
    menuSub = this.firstElementChild.nextElementSibling;
    if (menuSub){
        if (menuSub.className.includes(" menu_active")){
            menuSub.className = menuSub.className.replace(" menu_active", "");
        } else {
            menuSub.className += " menu_active"
        }   
    }
    return false
}
menuItem = document.querySelectorAll('.menu_main>li');
let menuItemArr = Array.from(menuItem);
menuItemArr.forEach(li => li.onclick = showMenu);