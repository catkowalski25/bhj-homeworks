let authForm = document.getElementById('signin__form');

document.getElementById('signin__btn').addEventListener('click', e => {
   e.preventDefault();
   let xhr = new XMLHttpRequest();
   xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
   xhr.responseType = 'json';
   let formData = new FormData(authForm);
   xhr.send(formData);
   xhr.addEventListener('load',() => {
      if (xhr.response.success) {
         authForm.reset();
         localStorage.setItem("user_id", xhr.response.user_id);
         successLogin();
      } else {
         alert('Неверный логин/пароль');
         authForm.reset();
      }
   })
})

function successLogin() {
   document.querySelector('.signin').classList.remove('signin_active');
   document.querySelector('.welcome').classList.add('welcome_active');;
   document.getElementById('user_id').textContent = localStorage.user_id;
 }

window.addEventListener("load", () => {
   if (localStorage.user_id) {
      successLogin();
   }
})

