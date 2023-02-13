
const title = document.querySelector(".hello h1");

console.dir(title)

function handleTitleClick (){
    title.style.color = "blue"
    console.log("title was clicked!")
}

function hadleMouseEnter(){
    console.log("mouse in here")
}

// click 이벤트를 listen 하고 click event 가 발생하면 
// handleTitleClick 함수 안에 들어있는것을 작동한다.
// 즉 자바스크립트가 명령값이 들어왔을경우 우리 대신 실행버튼을 눌러준다. handleTitleClick()
title.addEventListener("click", handleTitleClick)
title.addEventListener("mouseenter", hadleMouseEnter)

