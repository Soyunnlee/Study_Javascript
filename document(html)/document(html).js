// javascript 는 html에 접근하고 읽을수 있다.
// document 는 우리가 javascript 에서 html 을 뜻하고 , html 에 접근할 수 있는 방법이다.
document.title = "change title name" // javascript 를 통해 html 의 title 을 바꿀수 있다.


// ::: chapter1 ::: //

//getElementById 를 통해 
//title 이란 id 를 가진 element 를 찾는다.
document.getElementById("title")
const title = document.getElementById("title");

// console.log 대신 .dir 을 사용하면 더 자세하게 값을 출력해준다. array 가 아닌 object 타입으로 보여준다.
console.dir(title);
// title 안의 text 값을 got you 로 바꾼다.
title.ineerText = "Got you"

// ::: chapter2 ::: //

// getElementsByClassName 메소드를 통해
// html 안에 hello 라는 class 가진것들에 접근한다
const hellos = document.getElementsByClassName("hello");
console.log(hello)