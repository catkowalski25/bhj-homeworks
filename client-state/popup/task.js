const modalWindow = document.getElementById('subscribe-modal');

window.addEventListener("load", ()=>{
   let subscribe = document.cookie.split('; ').includes('subscribe=true');
   if (!subscribe) {
      modalWindow.classList.add('modal_active');
   }
})

document.querySelector('.modal__close').addEventListener('click',()=>{
   modalWindow.classList.remove('modal_active');
   document.cookie = 'subscribe=true';
})