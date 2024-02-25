'use strict';

const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
   
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
   
    xhr.upload.addEventListener('progress', (event) => {
        progress.value = event.loaded / event.total;
    });

    xhr.upload.addEventListener('error', () => {
        console.log(`${xhr.response.error}`);
    });
    xhr.send(formData);
});


