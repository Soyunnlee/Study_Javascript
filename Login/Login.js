
//Form submit event 방지 (새로고침 방지)
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

// hidden 이라는 css classname 을 저장해주었다.
// 관습처럼 string 만 포함된 변수는 대문자로 표기하고 string 을 저장하고 싶을때 사용한다.
const HIIDEN_CLASSNAME = "hidden"

// onLoginSubmit() 소괄호 안에 들어가이쓴 값을 argument 라고 한다.
// onLoginSubmit 이라는 function 이 하나의 argument 를 받도록 하고 그걸 Js 에 넘겨주고 있다.
// 여기에 담긴 ()argument 는 submit 이라는 event 를 뜻한다.
function onLoginSubmit(event){
    //.preeventDefault 라는 function 은 event의 기본 행동이든지 발생되지 않도록 막는것을 담고있다.
    event.preventDefault();
    loginForm.classList.add(HIIDEN_CLASSNAME);
    const username = loginInput.value;

    greeting.classList.remove(HIIDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`

}



loginForm.addEventListener("submit" , onLoginSubmit);

