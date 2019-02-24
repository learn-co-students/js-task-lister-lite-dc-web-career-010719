

class TaskList {
  constructor() {
    this.tl = []
  }
  newTask(title) {
    let t = new Task(title)
    this.tl.push(t)
    this.drawTaskList
  }
  drawTaskList() {
    let taskListHTML = ''
    for (const i of this.tl) {
      taskListHTML += i.drawTask()
    }
    return taskListHTML
  }
}
