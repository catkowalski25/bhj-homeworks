const progress = document.getElementById( 'progress' );
document.getElementById('send').addEventListener('click', (e)=>{
   e.preventDefault();
   let formData = new FormData(document.forms.form);
   let request = new XMLHttpRequest();
   request.open('POST', ' https://students.netoservices.ru/nestjs-backend/upload');

   request.upload.onprogress = e => {
      progress.value = e.loaded / e.total; 
   };
   request.send(formData);
});