
document.addEventListener("DOMContentLoaded", () => {

  let form = document.getElementById('create-task-form')
  let input = document.getElementById('new-task-description')
  let pri = document.getElementById('importance')
  let tastUl = document.getElementById('tasks')

  const taskList = new TaskList();
  form.addEventListener('submit', addTask)


  function addTask(e){
    e.preventDefault();
    if(input.value != ""){
      //create a new task
      let newTask = new Task(input.value, pri.value )

      // call taskList.add(task)
      taskList.addTask(newTask)

      //call updateDOM(taskList)
      updateDOM()

      input.value = ""

    }
  }



  function updateDOM(){
    tastUl.innerText = ""

    let list = taskList.getSortedList()
    for (var i = 0; i < list.length; i++) {
      let el1 = createLI(list[i])
      let delBtn = createDelButton(list[i])
      let editBtn = createEditButton(list[i])
      el1.appendChild(editBtn)
      el1.appendChild(delBtn)

      tastUl.appendChild(el1)
    }
  }


  function createLI(task){
    let el = document.createElement('li')
    el.innerText = task.mess
    if(task.priority == "low"){
      el.style.color = "black"
      el.style.backgroundColor = "yellow"

    }else if(task.priority == "meduim"){
      el.style.color = "black"
      el.style.backgroundColor = "orange"

    }else if(task.priority == "high"){
      el.style.color = "black"
      el.style.backgroundColor = "red"
    }
    return el
  }

  function createDelButton(task){
    let btn = document.createElement('button')
    btn.innerText = "x"
    btn.addEventListener('click',function () { delTask(task.id) })
    return btn
  }
  function createEditButton(task){
    let btn = document.createElement('button')
    btn.innerText = "Edit"
    btn.addEventListener('click',function () { editTask(task.id) })
    return btn
  }

  function delTask(id){
    taskList.del(id)
    updateDOM()
  }
  function editTask(id){
    form.hidden = true
    
  }







});
