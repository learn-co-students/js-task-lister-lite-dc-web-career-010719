document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  const list = document.getElementById('tasks');

  const form = document.getElementById('create-task-form');
  const titleInput = form.querySelector('input[type=text]');
  const priorityInput = form.querySelector('select[name=new-task-priority]');
  
  form.addEventListener('submit', e => {
    e.preventDefault();
    
    if (validForm()) {
      const priority = parseInt(priorityInput.value);
      taskList.addTask(titleInput.value, priority);
      form.reset();
      reloadTasks();
    }
  });

  function validForm() {
    return !!titleInput.value.length;
  }

  function reloadTasks() {
    list.innerHTML = '';
    taskList.sortedTasks().forEach(task => {
      const item = createTaskElem(task);
      item.querySelector('.task-delete').addEventListener('click', handleDelete);
      list.appendChild(item);
    });
  }

  function createTaskElem(task) {
    const elem = document.createElement('li');
    elem.classList.add('task', `priority-${task.priority}`);
    elem.dataset.id = task.id;
    elem.innerHTML = `<span class="task-title">${task.title}</span>`;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('task-action', 'task-delete');
    deleteBtn.innerText = 'X';
    deleteBtn.dataset.id = task.id; 
    
    elem.appendChild(deleteBtn);

    // const editBtn = document.createElement('button');
    // deleteBtn.classList.add('task-action', 'task-edit');
    // deleteBtn.innerText = 'e';
    // deleteBtn.dataset.id = task.id;
    // elem.appendChild(editBtn);

    return elem;
  }

  function handleDelete(e) {
    e.preventDefault();
    const id = e.target.dataset.id;
    taskList.removeTask(parseInt(id));
    reloadTasks();
  }
});
