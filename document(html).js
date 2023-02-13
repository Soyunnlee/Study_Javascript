// javascript 는 html에 접근하고 읽을수 있다.
// document 는 우리가 javascript 에서 html 을 뜻하고 , html 에 접근할 수 있는 방법이다.
document.title = "change title name"

document.getElementById("title")


const title = document.getElementById("title");

// console.log 대신 .dir 을 사용하면 더 자세하게 값을 출력해준다.
console.dir(title);

title.ineerText = "Got you"