'use strict';

const buttonCloseModal = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');

function setCookie(name, value) {
   document.cookie = name + '=' + encodeURIComponent(value);
};
 
function getCookie(name) {
   const value = document.cookie.split('; ');
   const pairs = value.find(p => p.startsWith(name + '='));
     return pairs.substring(name.length + 1);
};

window.addEventListener('load', () => {
   if (getCookie('modal') === 'close') {
     modal.classList.add('modal_active');
   }
});

buttonCloseModal.addEventListener('click', () => {
   modal.classList.remove('modal_active');
   setCookie('modal', 'close');
});



