'use strict';

let dropdownList = document.querySelector('.dropdown__list');
let dropdownValue = document.querySelector('.dropdown__value');
let dropdownLink = Array.from(document.querySelectorAll('.dropdown__link'));

function closeAndOpenMenu() {
   dropdownList.classList.contains('dropdown__list_active') 
     ? dropdownList.classList.remove('dropdown__list_active') 
     : dropdownList.classList.add('dropdown__list_active');
};

dropdownValue.addEventListener('click', closeAndOpenMenu);

dropdownLink.forEach(function (item) {
    item.onclick = function () {
        document.querySelector('.dropdown__value').textContent = item.textContent;
        return false;
    };
    item.addEventListener('click', closeAndOpenMenu);
})

