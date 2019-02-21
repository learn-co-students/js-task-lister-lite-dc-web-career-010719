document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  newTask()
});


let newTask = function () {
    let form = document.getElementById('create-task-form')
    form.addEventListener('submit', submitHandler)
}
function submitHandler (e) {
  e.preventDefault()

  let input = document.getElementById('new-task-description')
  let list = document.getElementById('tasks')
  let li = document.createElement('li')
  li.innerHTML = input.value
  list.appendChild(li)
}
