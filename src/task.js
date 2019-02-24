
class Task {
  constructor(title) {
    this.title = title
  }
  drawTask(){
    return `<li>${this.title}</li>`
  }
}
