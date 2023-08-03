document.querySelectorAll('.product__quantity-control').forEach(el => {
   el.addEventListener('click', changeValue);
})
document.querySelectorAll('.product__add').forEach(el => {
   el.addEventListener('click', addToCart);
})


function changeValue() {
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
}

function addToCart() {
   let currentProduct = this.closest('.product');
   let productId = currentProduct.dataset.id;
   let productValue = + currentProduct.querySelector('.product__quantity-value').innerText;

   let productInCart = false;
   document.querySelectorAll('.cart__product').forEach(product => {
      if (product.dataset.id === productId) {
         let valueDiv = product.querySelector('.cart__product-count');
         valueDiv.innerText = + valueDiv.innerText + productValue;
         productInCart = true;
      }
   });
   if (productInCart) {
      return
   }

   let productImage = currentProduct.querySelector('.product__image').src;
   let newProduct = document.createElement('div');
   newProduct.classList.add("cart__product");
   newProduct.dataset.id = productId;
   newProduct.innerHTML = `
      <img class="cart__product-image" src=${productImage}>
      <div class="cart__product-count">${productValue}</div>
   `;
   document.querySelector('.cart__products').insertAdjacentElement("beforeEnd", newProduct);
}