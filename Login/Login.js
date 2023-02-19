
//Form submit event 방지 (새로고침 방지)
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

// hidden 이라는 css classname 을 저장해주었다.
// 관습처럼 string 만 포함된 변수는 대문자로 표기하고 string 을 저장하고 싶을때 사용한다.
const HIIDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

// onLoginSubmit() 소괄호 안에 들어가있는 값을 argument 라고 한다.
// onLoginSubmit 이라는 function 이 하나의 argument 를 받도록 하고 그걸 Js 에 넘겨주고 있다.
// 여기에 담긴 ()argument 는 submit 이라는 event 를 뜻한다.
function onLoginSubmit(event){
    //.preeventDefault 라는 function 은 event의 기본 행동이든지 발생되지 않도록 막는것을 담고있다.
    event.preventDefault();
    loginForm.classList.add(HIIDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);

    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIIDEN_CLASSNAME); 
}

// localstorage 에 유저의 이름이 있는지 유무 확인.
// localstorage 에 있다면 보여주기 위한 함수.
const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
    // show the form
    loginForm.classList.remove(HIIDEN_CLASSNAME);
    loginForm.addEventListener("submit" ,onLoginSubmit);
}else{
    // 여기서는 localstorage 에 저장된 유저의 값을 받아와야 하므로 인자를 savedUserName 으로 해준다.
    paintGreetings(savedUserName);
}
