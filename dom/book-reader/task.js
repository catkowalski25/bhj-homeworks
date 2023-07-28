document.querySelector('.font-size_active').setAttribute("data-size", "medium")
book = document.getElementById("book");
document.querySelectorAll(".book__control").forEach(control => {
    addEventListener('click', corrector);
})

function corrector(event) {
    event.preventDefault();
    event. stopPropagation();
    const pressed = event.target;
    const buttons = pressed.parentElement.querySelectorAll('a');
    
    const pressedClass = pressed.className.split(' ')[0] + "_active";
    buttons.forEach(btn => btn.classList.remove(pressedClass));
    pressed.classList.add(pressedClass);

    let data = Array.from(pressed.attributes).find(atr => atr.name.startsWith("data"));
    
    if (data.name === "data-size") {
        book.classList.remove("book_fs-big");
        book.classList.remove("book_fs-small");
        if (data.value === "small") {
            book.classList.add("book_fs-small");
        } else if (data.value === "big") {
            book.classList.add("book_fs-big");
        }
    } else if (data.name === "data-text-color") {
        book.classList.remove("book_color-gray");
        book.classList.remove("book_color-whitesmoke");
        book.classList.remove("book_color-black");
        if (data.value === "black") {
            book.classList.add("book_color-black");
        } else if (data.value === "gray") {
            book.classList.add("book_color-gray");
        } else {
            book.classList.add("book_color-whitesmoke");
        }
    } else if (data.name === "data-bg-color") {
        book.classList.remove("book_bg-gray");
        book.classList.remove("book_bg-black");
        book.classList.remove("book_bg-white");
        if (data.value === "black") {
            book.classList.add("book_bg-black");
        } else if (data.value === "gray") {
            book.classList.add("book_bg-gray");
        } else {
            book.classList.add("book_bg-white");
        }   
    }
}