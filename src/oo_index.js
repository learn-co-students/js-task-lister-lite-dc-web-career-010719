
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList([]);
  let formElement = document.querySelector('form')
  let input = document.querySelector('input')
  let tasks = document.querySelector('ul#tasks')
  formElement.addEventListener('submit', function(event) {
    event.preventDefault()

    let task = new Task(input.value)
    taskList.add(task)

    let li = document.createElement('li')
    li.innerText = input.value
    tasks.appendChild(li)

    formElement.reset()
  })
})
