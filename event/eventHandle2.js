
const title = document.querySelector(".hello h1");

console.dir(title)


function handleWindowResize(){
    // document 즉 html 안의 body.style.backroundColor 을 토마토색으로 바꿔줌
    document.body.style.backgroundColor = "tomato";
}


// resize = 화면크기가 바뀔때마다 handleWindowResize 를 실행해준다.
window.addEventListener("resize" , handleWindowResize);