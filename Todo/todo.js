const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

// savedTodo (localstarage) 에 저장된 값이 있으면 보여줄 수 있도록 const 대신 let 을 쓴다.
let toDos = [];

const TODOS_KEY = "todos"

function saveTodos(){
    // localStorage.setItem("todos",toDos)
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// x 버튼을 눌렀을떼 부모요소인 li 를 타겟으로 해서
// li 를 삭제해준다.
function deleteTodo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
    // !!!!! saveTodos() 를 한번 더 불러야 한다는것을 잊지말자. !!!!!! // 
    saveTodos();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    // li Teg 에 id 를 부여해준다.
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    // x 버튼을 눌렀을떼
    button.addEventListener("click" , deleteTodo);

    // li 안에 span 을 추가한다.
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;

    toDoList.appendChild(li);  
}


function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    // newTodo 에 input.value 값을 복사해주면 input 값을 비워준다.
    toDoInput.value = "";
    const newTodoObj = {
        id : Date.now(),
        text : newTodo
    }

    // toDos 전역 배열저장소에 newTodo 를 넘겨준다(push)
    toDos.push(newTodoObj);

    // paintTodo 에 newTodo 값을 넘겨준다.
    paintTodo(newTodoObj);
    // saveTodo 실행.
    saveTodos();
}

toDoForm.addEventListener("submit" , handleTodoSubmit);



// localstorage 여부
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    //'["d","v"]' 으로 출력되던 string 을 살아있는 javascript object,배열 로 바꿔준다.
    const parsedToDos = JSON.parse(savedToDos);
    // 
    toDos = parsedToDos;

    // javascript 는 array 에 있는 각각의 item 에 대해 function을 실행할 수 있게 햐준다.
    // parsedTodos 는 array 라서 forEach 라는 것을 가지고 있다.
    // 여기서 forEach 가 function 을 실행하게 해준다.
    // 그 array 에 있는 각각의 item 에 대해 실행해준다.

    // forEach 는 각각의 item 에 sayHello 를 실행시킨다.
    // parsedToDos.forEach(sayHello) 를 화살표 함수를 써서 funcrion 을 많이 생성하지 않아도 된다.
    parsedToDos.forEach((item) => paintTodo(item));
}
// forEach 에서 item 을 넘겨받는다.
function sayHello(item){
    // console.log("this is the turn of ",item);
    // paintTodo(item);
}