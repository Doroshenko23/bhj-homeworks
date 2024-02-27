'use strict';

const pollTitle = document.querySelector('.poll__title');
const pollAnswer = document.querySelector('.poll__answers');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = "json";
xhr.send();
xhr.onreadystatechange = function() {

    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        let receivedData = xhr.response; 
            
        pollTitle.innerHTML = receivedData.data.title;

        let receivedDataArray = receivedData.data.answers; 
        

        for (let element in receivedDataArray) { 
            const addingButton = `<button class="poll__answer">${receivedDataArray[element]}</button>`
            pollAnswer.insertAdjacentHTML('afterBegin', addingButton);            
        };

        const button = document.querySelector('.poll__answer');
        button.addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!')
        });
    };
}