


const title = document.querySelector(".hello h1");

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

// click 이벤트를 listen 하고 click event 가 발생하면 
// handleTitleClick 함수 안에 들어있는것을 작동한다.
title.addEventListener("click", handleTitleClick)
// title.onclick = handleTitleClick 으로 샤용가능하다. 하지만 위와 같이 쓰는것이 좋다. .removeEventListener 을 사용하여 삭제할수도 있기 때문이다.
title.addEventListener("mouseenter", hadleMouseenter)
title.addEventListener("mouseleave", handleMouseleave)


