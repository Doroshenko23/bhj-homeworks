'use strict';

const linkElements = document.querySelectorAll('.has-tooltip');
const tooltip = document.createElement('div');
  
function isVivible(element) {
  const {top, bottom} = element.getBoundingClientRect();

    if (bottom < 0 || top > window.innerHeight) {
      return false;
    } else {
      return true;
    }
}

window.addEventListener('scroll', () => {
  linkElements.forEach((event) => {
    
    if (isVivible(event)) {
      event.classList.add('.has-tooltip');
    } else {
      event.classList.remove('.has-tooltip');
    }
  })
});
 
Array.from(linkElements).forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();

    const {top, left} = element.getBoundingClientRect();
    
    tooltip.textContent = element.title;
    tooltip.classList.add('tooltip_active', 'tooltip');
    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top - 30}px`;

    element.after(tooltip);
  });
});

