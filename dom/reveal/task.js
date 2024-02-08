'use strict';

const reveal = document.querySelectorAll('.reveal');

function isVivible(element) {
    const {top, bottom} = element.getBoundingClientRect();

    bottom < 0 || top > window.innerHeight
      ? false
      : true;
}

reveal.forEach((event) => {
    event
      ? event.classList.add('reveal_active')
      : event.classList.remove('reveal_active');

    window.addEventListener('scroll', isVivible);
});
