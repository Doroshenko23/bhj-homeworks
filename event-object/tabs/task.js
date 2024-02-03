'use strict';

const tabElements = Array.from(document.querySelectorAll('.tab'));
const contentElements = Array.from(document.querySelectorAll('.tab__content'));

tabElements.forEach((elem) => {
  elem.addEventListener('click', (event) => {
    event.preventDefault();
    
    if (elem.classList.contains('tab_active')) return;
   
    const index = tabElements.indexOf(elem);
       
    const activeTab = document.querySelector('.tab_active');
      activeTab.classList.remove('tab_active');
      elem.classList.add('tab_active');

    const activeContent = document.querySelector('.tab__content_active');
      activeContent.classList.remove('tab__content_active');
      contentElements[index].classList.add('tab__content_active');  
  });
})