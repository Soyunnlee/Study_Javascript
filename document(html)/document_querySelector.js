// <div class="hello">
//     <h1 >Grab me!</h1>
// </div>


// querySelector 는 element를 css 방식으로 검색할 수 있다. array를 반환해준다.
// querySelector 은 상단의 하나만 가져온다 따라서
// h1 element 가 여러개 있다고 가정하였을때 모든 h1 element 를 가져오고싶다면 querySelectorAll 을 사용하면된다.
const title1 = document.querySelector(".hello h1")
const title2 = document.querySelector(".hello h1:first-child")
const title3 = document.querySelectorAll(".hello h1")

console.log(title)