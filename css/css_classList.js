const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick (){
    // className 을 clickedClass 에 담아서 사용한다. 실수와 유지보수를 줄여줄수 있다.
    const clickedClass = "clicked";
    // click 했을경우 토마토 , 다시 클릭했을경우 원래대로 되돌리기위해
    if(h1.className === clickedClass){
        // className 이 active라면 className 을 비워 원래대로의 상태로 만들어주고
        h1.className = "";
    }else {
        // 그렇지 않을경우 active (토마토색) 으로 바꾸어준다.
        h1.className = clickedClass;
    }
}


h1.addEventListener("click", handleTitleClick) 