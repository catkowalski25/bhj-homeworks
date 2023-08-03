document.querySelectorAll('.product__quantity-control').forEach(el => {
   el.addEventListener('click', changeValue);
})
document.querySelectorAll('.product__add').forEach(el => {
   el.addEventListener('click', addToCart);
})


function changeValue(event) {
   let valueDiv = this.parentElement.querySelector('.product__quantity-value');
   if (this.classList.contains('product__quantity-control_dec')) {
      if (+valueDiv.innerText > 1) {
         valueDiv.innerText = + valueDiv.innerText - 1;
      } else {
         return
      }
   } else {
      valueDiv.innerText = + valueDiv.innerText + 1;
   }

   let currentProduct = this.closest('.product');
   let productId = currentProduct.dataset.id;
   if (inCart(productId)){
      document.querySelectorAll('.cart__product').forEach(product => {
         if (product.dataset.id === productId) {
            product.querySelector('.cart__product-count').innerText = valueDiv.innerText;
         }
      });
   }
}

function addToCart(event) {
   let currentProduct = event.target.closest('.product');
   let productId = currentProduct.dataset.id;

   if (inCart(productId)) {
      return
   }

   let productImage = currentProduct.querySelector('.product__image').src;
   let productValue = + currentProduct.querySelector('.product__quantity-value').innerText;

   let newProduct = document.createElement('div');
   newProduct.classList.add("cart__product");
   newProduct.dataset.id = productId;
   newProduct.innerHTML = `
      <img class="cart__product-image" src=${productImage}>
      <div class="cart__product-count">${productValue}</div>
   `;
   document.querySelector('.cart__products').insertAdjacentElement("beforeEnd", newProduct);
}

function inCart(productId) {
   let isProductInCart = false;
   document.querySelectorAll('.cart__product').forEach(product => {
      if (product.dataset.id === productId) {
         isProductInCart = true;
      }
   });
   return isProductInCart
}


