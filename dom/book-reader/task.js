'use strict';

const book = document.querySelector('.book');
const fontSize = document.querySelectorAll('.font-size'); 

fontSize.forEach((item) => {
  const size = item.getAttribute('data-size');

  function activeFont(event) {
      event.preventDefault();
      item.classList.add('font-size_active');
      fontSize.forEach((element) => {
        element.classList.remove('font-size_active');
      });
       
      book.classList.remove('book_fs-small', 'book_fs-big');

      if (size === 'small') {
          book.classList.add('book_fs-small'); 
      } 
      if (size === 'big') {
          book.classList.add('book_fs-big'); 
      }
  }
   item.addEventListener('click', activeFont);
})  

 
