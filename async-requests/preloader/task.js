'use strict';

const items = document.getElementById('items');
const loader = document.getElementById('loader');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = "json";
xhr.send();

xhr.onreadystatechange = function() {
    loader.classList.remove('loader_active'); 

    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        let receivedData = xhr.response.response.Valute;

        for (let element in receivedData) {

          let addingElements = `<div class="item">
          <div class="item__code">${receivedData[element].CharCode}</div>
          <div class="item__value">${receivedData[element].Value}</div>
          <div class="item__currency">руб.</div>
          </div>`;

          items.insertAdjacentHTML('afterBegin', addingElements);
        }; 
    }
}