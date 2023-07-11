
function slide(slideParam) {
    const pictures = Array.from(document.getElementsByClassName("slider__item"));
    let activePicture = pictures.findIndex(picture => picture.className.includes("slider__item_active"));
    pictures[activePicture].className = pictures[activePicture].className.replace(" slider__item_active", "");
    activePicture += slideParam;
    if (activePicture < 0){activePicture = pictures.length - 1};
    if (activePicture > (pictures.length - 1)){activePicture = 0};
    pictures[activePicture].className += " slider__item_active";
}

const arrows = document.getElementsByClassName("slider__arrow");
arrows[0].onclick = () => slide(-1);
arrows[1].onclick = () => slide(1);