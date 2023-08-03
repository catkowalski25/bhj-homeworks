const taskList = document.getElementById('tasks__list');
const taskInput = document.getElementById('task__input');
document.getElementById('tasks__add').addEventListener('click',addTask);

document.addEventListener('keypress', (event) => {
   if (event.key === 'Enter') {addTask(event)};
 });

function addTask(event) {
   event.preventDefault();
   let newTaskValue = taskInput.value;
   if (newTaskValue) {
      taskInput.value = "";
   } else {
      return
   }
   let newTask = document.createElement('div');
   newTask.classList.add("task")
   newTask.innerHTML = `
      <div class="task__title">
         ${newTaskValue}
      </div>
      <a href="#" class="task__remove">&times;</a>
      `;
   newTask.lastElementChild.addEventListener('click', function() {
      this.parentElement.remove();
   });
   taskList.insertAdjacentElement("beforeEnd", newTask);
}