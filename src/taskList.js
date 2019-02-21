function createTaskList() {
  let TaskListID = 0

  return class {
    constructor(taskArr) {
      this.taskArr = taskArr
      this.id = ++TaskListID
    }

    add(task) {
      this.taskArr.push(task)
    }

    // Return a color based on priority number
    colorByPriority(priority) {
      switch (priority) {
        case 3:
          return 'green'
        case 2:
          return 'orange'
        case 1:
          return 'red'
      }
    }

    displayList() {
      // Sort tasks in task list from highest priority to lowest
      let sortedTasks = this.taskArr.sort((a,b) => a.priority - b.priority)
      sortedTasks.forEach(task => {

        // Create list item with task description/delete button associated w/task ID
        let li = document.createElement('li')
        li.innerHTML = `${task.content} <button id="delete${task.id}"> X </button>`

        // Style that item's text based on the task's priority
        li.style.color = this.colorByPriority(task.priority)

        tasks.appendChild(li)
      })
    }

    // Delete a task from the task list
    deleteFromList(taskID) {
      let deleted = this.taskArr.find(task => task.id == taskID)
      this.taskArr = this.taskArr.filter(value => value != deleted)
      return this.taskArr
    }

  }

}

const TaskList = createTaskList()
