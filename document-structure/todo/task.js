'use strict';

const tasksList = document.getElementById('tasks__list');
const tasksForm = document.getElementById('tasks__form');

tasksForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const tasksInput = document.getElementById('task__input');
  const assignedTask = tasksInput.value.trim();
  
  if (assignedTask.length === 0) return;
  
  const task = `<div class="task">
                    <div class="task__title">
                       ${assignedTask}
                    </div>
                    <a href="#" class="task__remove">&times;</a>
                </div>`;

  tasksList.insertAdjacentHTML('beforeEnd', task);
  tasksInput.value = '';

  const taskRemove = document.querySelectorAll('.task__remove');

  taskRemove.forEach((element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault();
      event.target.closest('.task').remove();
    });
  });
});