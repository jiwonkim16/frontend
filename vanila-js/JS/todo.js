const toDoForm = document.getElementById("todo-form")
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list")

let toDos = []

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos))
}

function deleteToDo(event){
    const li = event.target.parentElement
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
    saveToDos();
}

function paintToDo(newToDo){
    const li = document.createElement("li")
    li.id = newToDo.id
    const span = document.createElement("span")
    span.innerText = newToDo.text;
    const button = document.createElement("button")
    button.innerText = "X"
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li. appendChild(button)
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault()
    const newToDo = toDoInput.value
    toDoInput.value=""
    const newTodoObject = {
        text:newToDo, id:Date.now()
    }
    toDos.push(newTodoObject);
    paintToDo(newTodoObject)
    saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)


const savedToDos = localStorage.getItem("todos")

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo);
}


