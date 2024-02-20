'use strict';

const linkElements = document.querySelectorAll('.has-tooltip');
const tooltip = document.createElement('div');
  
function isVivible(element) {
  const {top, bottom} = element.getBoundingClientRect();

    if (bottom < 0 || top > window.innerHeight) {
      return false;
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

    if (tooltip.textContent === element.title) {
      tooltip.classList.toggle('tooltip_active');
      return;
    }
        
    const {top, left} = element.getBoundingClientRect();
    
    tooltip.textContent = element.title;
    tooltip.classList.add('tooltip_active', 'tooltip');
    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top - 30}px`;

    element.after(tooltip);
  });
});

window.addEventListener ('mouseout', event => {
  const target = event.target;
  if (!target.closest('tooltip_active') && !target.closest('.has-tooltip')) {
    tooltip.classList.remove('tooltip_active');
  }
});