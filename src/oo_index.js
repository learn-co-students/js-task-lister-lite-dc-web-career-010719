document.addEventListener("DOMContentLoaded", () => {
  // User's task list
  const taskList = new TaskList([])

  // Page elements
  let formElement = document.querySelector('form')
  let input = document.querySelector('input')
  let select = document.querySelector('select')
  let tasks = document.querySelector('ul#tasks')

  // Add event listeners
  formElement.addEventListener('submit', submitTask)
  tasks.addEventListener('click', deleteTask)

  // When user clicks "Create New Task"
  function submitTask(event) {
    event.preventDefault()
    clearList()

    let task = new Task(input.value, select.value)
    taskList.add(task)
    taskList.displayList()

    formElement.reset()
  }

  // Reset the taskList ul so it can be re-displayed
  function clearList() {
    let tasks = document.querySelector('ul#tasks')
    while (tasks.firstChild) {
      tasks.removeChild(tasks.firstChild)
    }
  }

  // Locate button that was clicked, remove that task from TaskList,
  // clear and then re-display the task list
  function deleteTask(e) {
    if (e.target && e.target.nodeName === "BUTTON") {
      taskList.deleteFromList(e.target.id.slice(-1))
    }
    clearList()
    taskList.displayList()
  }
})
