function addTask(event) {
  if (event.key === "Enter") {
      const taskInput = document.getElementById('taskInput');
      const taskText = taskInput.value.trim();

      if (taskText !== "") {
          const taskItem = document.createElement('li');
          taskItem.innerText = taskText;

          const completeButton = document.createElement('button');
          completeButton.innerText = '완료';
          completeButton.classList.add('complete');
          completeButton.onclick = () => completeTask(taskItem);

          taskItem.appendChild(completeButton);

          document.getElementById('todoList').appendChild(taskItem);

          taskInput.value = '';
      }
  }
}

function completeTask(taskItem) {
  const completedList = document.getElementById('completedList');

  taskItem.removeChild(taskItem.querySelector('button'));

  const deleteButton = document.createElement('button');
  deleteButton.innerText = '삭제';
  deleteButton.classList.add('delete');
  deleteButton.onclick = () => deleteTask(taskItem);

  taskItem.appendChild(deleteButton);

  completedList.appendChild(taskItem);
}

function deleteTask(taskItem) {
  taskItem.remove();
}
