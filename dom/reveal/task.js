'use strict';

const reveal = document.querySelectorAll('.reveal');

function isVivible(element) {
  const {top, bottom} = element.getBoundingClientRect();

    if (bottom < 0 || top > window.innerHeight) {
      return false;
    } else {
      return true;
    }
}

window.addEventListener('scroll', () => {
  reveal.forEach((event) => {
    
    if (isVivible(event)) {
      event.classList.add('reveal_active');
    } else {
      event.classList.remove('reveal_active');
    }
  })
});

