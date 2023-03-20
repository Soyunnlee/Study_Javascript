const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

const TODOS_KEY = "todos"

function saveTodo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter((item)=> toDos.id !== parseInt(li.id))
    li.remove();
    // 꼭 saveTodo 를 실행시켜주어야 한다
    saveTodo()
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click" , deleteTodo);


    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo;

    toDoList.appendChild(li);  
}


function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    // newTodoObj 에 object 형태로 넘겨준다.
    const newTodoObj = {
        id : Date.now(),
        text : newTodo
    }

    toDos.push(newTodoObj);

    paintTodo(newTodoObj);
    saveTodo();
}

toDoForm.addEventListener("submit" , handleTodoSubmit);



// localstorage 여부
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);

    parsedToDos.forEach((item) => paintTodo(item));
}