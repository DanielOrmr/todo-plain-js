const addToDoButton = document.getElementById("addToDo-button")
const editToDoButton = document.getElementById("editToDo-button")
const toDoListElement = document.getElementById("ToDoList")

function addToDo(){       
    const task = prompt("Please add a task:", "");
    if (task == null || task == "") {
        alert("you did something wrong")
  } else {
    const toDoListElement = document.getElementById("ToDoList")
    const box = document.createElement("div")
    box.classList.add("card")
    const p = document.createElement("p")
    p.innerText = task
    box.appendChild(p)
    toDoListElement.appendChild(box)
    const c = document.createElement("button")
    c.innerText = "Completed"
    c.addEventListener("click", taskCompleted)
    box.appendChild(c)
    const e = document.createElement("button")
    e.innerText = "Edit"
    e.addEventListener("click", editToDo)
    box.appendChild(e)
    const d = document.createElement("button")
    d.innerText = "Delete"
    d.addEventListener("click", deleteToDo)
    box.appendChild(d)
    

  }
 
}

    addToDoButton.addEventListener("click", addToDo)

function editToDo(event){
    console.log(event.target)
    const card = event.target.parentElement
    const textElement = card.querySelector("p")
    const newTask = prompt("Edit your task:", textElement.innerText)
    if (newTask == null || newTask == "") {
        alert("you did something wrong")
  } else {
    textElement.textContent = newTask
  }
}

function deleteToDo(event){
    const card = event.target.parentElement
    card.remove()
}
function taskCompleted(event){
    
    const card = event.target.closest(".card")
    confetti()
    card.remove()

}