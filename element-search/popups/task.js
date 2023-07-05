const modalRed = document.getElementById("modal_main");
const modalGreen = document.getElementById("modal_success");

modalRed.className += " modal_active";

function closeModalWindow() {
    this.closest('.modal').className = "modal";
}

let closeWindow = document.querySelectorAll('div.modal__close');

for (let index = 0; index < closeWindow.length; index++) {
    closeWindow[index].onclick = closeModalWindow;  
}

document.querySelector(".btn_danger").onclick = ()=>{
    modalRed.className = "modal";
    modalGreen.className += " modal_active";
};





