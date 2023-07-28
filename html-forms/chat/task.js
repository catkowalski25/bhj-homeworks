const widget = document.querySelector('.chat-widget');
const sideButton = document.querySelector('.chat-widget__side');
sideButton.addEventListener('click', () =>{
   widget.classList.add('chat-widget_active');
})

const messages = document.querySelector('.chat-widget__messages');
const inputPlace = document.querySelector('.chat-widget__input');

const robotMessages = ['Добрый день!', "До свидания!","Все операторы сейчас заняты", "Поговори с рукой"]

document.addEventListener('keypress', (event) => {
   if (event.key === 'Enter') {
      const messageText = inputPlace.value;
      inputPlace.value = '';
      let time = new Date;
      if (messageText) {
         messages.innerHTML += `
         <div class="message message_client">
            <div class="message__time">${time.getHours()}:${time.getMinutes()}</div>
            <div class="message__text">${messageText}</div>
         </div>
      `
      time = new Date; 
      messages.innerHTML += `
       <div class="message">
         <div class="message__time">${time.getHours()}:${time.getMinutes()}</div>
         <div class="message__text">${robotMessages[Math.floor(Math.random()*robotMessages.length)]}</div>
       </div>
      `
      }
   }
});