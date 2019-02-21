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
  }
}

const TaskList = createTaskList()
