class TaskList {
  constructor() {
    this.tasks = [];
    this.counter = 0;
  }

  find(id) {
    const results = this.tasks.filter(t => t.id === id);
    if (results.length) return results[0];
  }

  sortedTasks(direction = 'desc') {
    let sorted = [...this.tasks];
    return sorted.sort((a, b) => {
      if (direction.toLowerCase() === 'asc')
        return (a.priority - b.priority);
      else
        return (b.priority - a.priority);
    });
  }

  nextID() {
    return ++this.counter;
  }

  addTask(title, priority = 1) {
    const id = this.nextID();
    this.tasks.push(new Task(id, title, priority));
  }

  removeTask(id) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

  updateTask(id, title) {
    const task = this.find(id);
    if (typeof task === 'undefined') return;
    task.title = title;
  }

  dispatch() {
    const event = new CustomEvent('reload', {detail: this});
    document.dispatchEvent(event);
  }
}
