
document.addEventListener("DOMContentLoaded", () => {
  const mainList = new TaskList();

  let form = document.getElementById('create-task-form')
  let listArea = document.getElementById('tasks')

  form.addEventListener('submit', function(e){
    e.preventDefault()
    let input = e.target.querySelector('#new-task-description').value
    mainList.newTask(input)
    // debugger
    listArea.innerHTML = mainList.drawTaskList()
  })
  // debugger
});
