function createTask() {
  let TaskID = 0
  return class {
    constructor(content, priority) {
      this.content = content
      this.priority = parseInt(priority)
      this.id = ++TaskID
    }
  }
}

const Task = createTask()
