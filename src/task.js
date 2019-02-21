function createTask() {
  let TaskID = 0
  return class {
    constructor(content) {
      this.content = content
      this.id = ++TaskID
    }
  }
}

const Task = createTask()
