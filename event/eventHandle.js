const title = document.querySelector(".hello h1"); // .hello id를 가진 <div> 안에 있는 <h1> teg 를 뜻한다.

// object 로 나열된 값들중
// on 으로 시작하는 것은 모두 event 들이다. 
// on 뒤에있는것으로 명시해서 쓰인다. 예를 들면 onmouseenter 은 mouseenter 로 쓴다.
console.dir(title)


function handleTitleClick (){
    title.style.color = "blue"
    console.log("title was clicked!")
}

function hadleMouseenter(){
    console.log('mouse here')
    title.innerText= "mouse on"
};

function handleMouseleave(){
    title.innerText= "mouse leave"
}

function handleWindowResize(){
    // document 즉 html 안의 body.style.backroundColor 을 토마토색으로 바꿔줌
    document.body.style.backgroundColor = "tomato";
}

function handlewindowcopy(){
    alert("copy!")
    console.log("copy")
}

function handleWindowOffline(){
    alert("SOS no WIFI")
}

function handleWindowOnline(){
    alert("WIFI Good")
}

// event 를 사용할때 on 뒤에오는 값으로 정의해줘야 한다.
// click 이벤트를 listen 하고 click event 가 발생하면 
// handleTitleClick 함수 안에 들어있는것을 작동한다.
title.addEventListener("click", handleTitleClick) // title.onClick = handleTitleClick 으로 샤용가능하다. 하지만 위와 같이 쓰는것이 좋다.
//removeEventListener 을 사용하여 삭제할수도 있기 때문이다.
title.addEventListener("mouseenter", hadleMouseenter) // title.onMouseenter = handleMouseenter
title.addEventListener("mouseleave", handleMouseleave)

// resize = 화면크기가 바뀔때마다 handleWindowResize 를 실행해준다.
window.addEventListener("resize" , handleWindowResize);
window.addEventListener("copy", handlewindowcopy)

window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online" , handleWindowOnline); 
