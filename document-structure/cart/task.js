'use strict';

const cart = document.querySelector('.cart__products');
const buttons = document.querySelectorAll('.product__add');
const controllersDecrement = document.querySelectorAll('.product__quantity-control_dec');
const controllersIncrement = document.querySelectorAll('.product__quantity-control_inc');

const decrease = (elem) => {
  const parent = elem.closest('.product');
  const innerValue = parent.querySelector('.product__quantity-value');
  let counter = Number(innerValue.textContent);
  
  if (counter === 1) 
    return;
 
  counter --;
  innerValue.innerHTML = counter;
};

const increase = (elem) => {
  const parent = elem.closest('.product');
  const innerValue = parent.querySelector('.product__quantity-value');
  let counter = Number(innerValue.textContent);

  counter ++;
  innerValue.innerHTML = counter;
};

const checkForProductInCart = (elem) => {
  const parent = elem.closest('.product');
  const productId = parent.dataset.id;
  const productCount = parent.querySelector('.product__quantity-value');

  const products = document.querySelectorAll('.cart__product');

  const findProductInCart = Array.from(products).find(
    (product) => product.dataset.id === productId);

  if (findProductInCart) {
    const count = findProductInCart.querySelector('.cart__product-count');
    const currentValue = Number(count.innerHTML);
    const newValue = Number(productCount.innerHTML);

    count.innerHTML = currentValue + newValue;

    return;
  }

  const productImg = parent.querySelector('.product__image');

  const cartProduct = document.createElement('div');
  cartProduct.classList.add('cart__product');
  cartProduct.setAttribute('data-id', productId);

  const cartImg = productImg.cloneNode(false);
  cartImg.classList.remove('product__image');
  cartImg.classList.add('cart__product-image');

  const cartCount = productCount.cloneNode(true);
  cartCount.classList.remove('product__quantity-value');
  cartCount.classList.add('cart__product-count');

  cartProduct.append(cartImg);
  cartProduct.append(cartCount);

  cart.append(cartProduct);
};

buttons.forEach((element) => {
  element.addEventListener('click', () => checkForProductInCart(element));
});

controllersDecrement.forEach((element) => {
  element.addEventListener('click', () => decrease(element));
});

controllersIncrement.forEach((element) => {
  element.addEventListener('click', () => {increase(element);
  });
});