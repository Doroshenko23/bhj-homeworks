'use strict';

const editor = document.getElementById(`editor`);

document.addEventListener(`keyup`, () => {
  localStorage.setItem(`text`, editor.value);
});

window.addEventListener(`load`, () => {
  editor.value = localStorage.getItem(`text`);
});