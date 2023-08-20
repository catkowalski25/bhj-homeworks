async function askQuestion() {
   const response = await fetch ('https://students.netoservices.ru/nestjs-backend/poll');
   const result = await response.json();
   const question = result.data.title;
   const answers = result.data.answers;

   document.getElementById('poll__title').innerText = question;
   const pollAnswers = document.getElementById('poll__answers');
   answers.forEach(answer => {
      pollAnswers.insertAdjacentHTML('beforeend', `
         <button class="poll__answer">
            ${answer}
         </button>
      `);
   });
   pollAnswers.querySelectorAll('.poll__answer').forEach(button => {
      button.addEventListener('click', (e) =>{
         alert('Спасибо, ваш голос засчитан!');
         pollAnswers.innerText = '';
         askQuestion();
      })
   })
}

askQuestion();