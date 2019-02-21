class TaskList {

  constructor(){
    this.tasks = []
  }

  addTask(task){
    this.tasks.push(task)
  }


  del(id){
    let list = this.tasks
    this.tasks = list.filter(item => item.id !== id)

  }
  getSortedList(){
    let low = []
    let meduim = []
    let high = []

    for (var i = 0; i < this.tasks.length; i++) {

      if(this.tasks[i].priority == "low"){
        low.push(this.tasks[i])

      }else if(this.tasks[i].priority == "meduim"){
        meduim.push(this.tasks[i])

      }else if(this.tasks[i].priority == "high"){
        high.push(this.tasks[i])
      }
    }
      let end = high.concat(meduim)
      end = end.concat(low)
      return end
    }

}
