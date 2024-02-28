'use strict';

const form = document.getElementById('signin__form');
const signin = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

form.addEventListener('submit', event => {
  event.preventDefault();
  
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth'); 
  xhr.responseType = 'json';
  xhr.send(formData);
  
  xhr.onload = function() {
                
    if (xhr.response.success) {
       localStorage.userId = xhr.response.user_id;
       showWelcome();  
       form.reset(); 
    } else { 
        alert('Неверный логин/пароль');
      }
  }
});

window.addEventListener('load', () => {
  localStorage.userId 
  ? showWelcome()
  : false;
});
  
function showWelcome() {
  userId.innerText = localStorage.userId;
  signin.classList.remove('signin_active');
  welcome.classList.add('welcome_active'); 
};


