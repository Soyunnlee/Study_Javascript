const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

const TODOS_KEY = "todos"

function saveTodo(){
    // localStorage.setItem("todos",toDos)
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


// x 버튼을 눌렀을떼 부모요소인 li 를 타겟으로 해서
// li 를 삭제해준다.
function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    // x 버튼을 눌렀을떼
    button.addEventListener("click" , deleteTodo);

    // li 안에 span 을 추가한다.
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo;

    toDoList.appendChild(li);  
}


function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    // newTodo 에 input.value 값을 복사해주면 input 값을 비워준다.
    toDoInput.value = "";

    // toDos 전역 배열저장소에 newTodo 를 넘겨준다(push)
    toDos.push(newTodo);

    // painTodo 에 newTodo 값을 넘겨준다.
    paintTodo(newTodo);
    // saveTodo 실행.
    saveTodo();
}

toDoForm.addEventListener("submit" , handleTodoSubmit);



// localstorage 여부
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    //'["d","v"]' 으로 출력되던 string 을 살아있는 javascript object,배열 로 바꿔준다.
    const parsedToDos = JSON.parse(savedToDos);
    console.log(parsedToDos);

    // javascript 는 array 에 있는 각각의 item 에 대해 function을 실행할 수 있게 햐준다.
    // parsedTodos 는 array 라서 forEach 라는 것을 가지고 있다.
    // 여기서 forEach 가 function 을 실행하게 해준다.
    // 그 array 에 있는 각각의 item 에 대해 실행해준다.
    parsedToDos.forEach(sayHello);
}

function sayHello(item){
    console.log("this is the turn of ",item);
}