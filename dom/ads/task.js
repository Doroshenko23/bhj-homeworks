'use strict';

const rotator = document.querySelectorAll('.rotator__case'); 
let counter = 0;

function rotatorActive() {
  rotator.forEach((element, index) => {
    element.classList.toggle('rotator__case_active', counter == index);
  });

  counter++;   

  if (counter > rotator.length - 1) {
    counter = 0;
  }

  for (let event of rotator) {
    event.style.color = event.getAttribute('data-color');
  }
}
setInterval(rotatorActive,1000);
