const progress = document.getElementById( 'progress' );
document.getElementById('send').addEventListener('click', (e)=>{
   e.preventDefault();
   let formData = new FormData(document.forms.form);
   let request = new XMLHttpRequest();
   request.open('POST', ' https://students.netoservices.ru/nestjs-backend/upload');
   request.addEventListener('readystatechange', function() {
      if (this.readyState === 1) {
         progress.value = 0.25;
      } else if (this.readyState === 2) {
         progress.value = 0.5;
      }else if (this.readyState === 3) {
         progress.value = 0.75;
      } else {
         progress.value = 1;
      }  
   });
   request.send(formData);
});