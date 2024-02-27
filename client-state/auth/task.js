'use strict';

const form = document.getElementById('signin__form');
const signin = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const signintButton = document.getElementById('signin__btn');

form.addEventListener('submit', event => {
  event.preventDefault();
  
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth'); 
  
  xhr.onreadystatechange = function() {
    if (this.readyState !== this.DONE && xhr.status === 200)  
      return;

     const answer = JSON.parse(this.responseText);
        
     if (!answer.success) {
       alert('Неверный логин/пароль');
       return;
     } 
              
      localStorage.userId = answer.user_id;
      userId.innerText = localStorage.userId;
      signin.classList.remove('signin_active');
      welcome.classList.add('welcome_active');          
    };
      xhr.send(formData);
      form.reset();
});

signintButton.addEventListener('click', () => {
  delete localStorage.userId;
  welcome.classList.remove('welcome_active'); 
  signin.classList.add('signin_active');  
});

