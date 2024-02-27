'use strict';

const editor = document.getElementById(`editor`);
let imputText = editor.value;

document.addEventListener(`keyup`, () => {
  localStorage.setItem(`text`, imputText);
});

window.addEventListener(`load`, () => {
  imputText = localStorage.getItem(`text`);
});