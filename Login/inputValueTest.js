// const loginForm = document.getElementById("login-form");
// doument 가 아닌 login?From 에서 바로 찾을수가 있다 
// loginForm 이 document 를 담고 있기 때문.
// 하지만 코드를 줄이기 위해 document 를 사용할 것이다.
// const loginBtn = loginForm.querySelector("#login-form button");

const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");
console.log(loginInput)

function onLoginClick(){
    const userName = loginInput.value
    if(userName === ""){
        alert("please wirte your name");
    } // html 에서 지원하는 input teg 자체의 required 로 대체할 수 있다.
    else if(userName.length > 15){
        alert("Your name is too long.")
    }
}

loginBtn.addEventListener("click" , onLoginClick)

