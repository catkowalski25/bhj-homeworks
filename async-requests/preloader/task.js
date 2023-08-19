let xhr = new XMLHttpRequest( );
xhr.open ('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses'); 
xhr.send();

xhr.addEventListener('readystatechange', () => {
   if(xhr.readyState === xhr.DONE && xhr.status === 200) {
      document.getElementById('loader').classList.remove('loader_active');
      let responseValute = JSON.parse(xhr.responseText).response.Valute;
      for (let valute in responseValute){
         document.getElementById('items').insertAdjacentHTML("beforeend",`
            <div class="item">
               <div class="item__code">
                  ${responseValute[valute].CharCode}
               </div>
               <div class="item__value">
                  ${responseValute[valute].Value}
               </div>
               <div class="item__currency">
                  руб.
               </div>
            </div>
         `)
      };
   }
   });

   