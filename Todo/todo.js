const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function paintTodo(newTodo){
    console.log("iwill paint newTodo",newTodo)
    const li = document.createElement("li")
    const span = document.createElement("span")
    
    // li 안에 span 을 추가한다.
    li.appendChild(span);    
    span.innerText = newTodo;

    toDoList.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    localStorage.setItem(newTodo,newTodo);
    // newTodo 와 로컬스토리지에 input.value 값을 복사해주면 input 값을 비워준다.
    toDoInput.value = "";

    // painTodo 에 newTodo 값을 넘겨준다.
    paintTodo(newTodo);
}



toDoForm.addEventListener("submit" , handleTodoSubmit);