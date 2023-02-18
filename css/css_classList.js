const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

function handleTitleClick (){
    const clickedClass = "clicked";
    // classList 는 class들의 목록으로 작업할수 있게끔 허용해준다.
    // className은 그냥 모든것을 교채해버린다. 이전에 class 들은 상관하지 않고 말이다.
    // 따라서 classList 를 쓰는것이 더 효율적이다.

    // clickedClass 가 h1 의 classList에 포함되어 있다면
    // contains 라는 element 가 clikedClass(ckicked) 가 있는지만 확인해준다. (true|false)
    // if(h1.classList.contains(clickedClass)){
    //     h1.classList.remove(clickedClass)
    // }else {
    //     h1.classList.add(clickedClass);
    // }


    // toggle 을 사용해 위의 코드를 줄일수 있다.
    // classList에 classname 이 포함되어 있다면 제거하고 , 포함되지 않았다면 추가하고.
    // 여기의 예제에서는 clicked 하나만 사용하기 때문에 위의 const 선언도 해주지 않아도 된다.
    // 토큰을 toggle 한다. 토큰이 존재한다면 (classname) 토큰을 제거하고 존재하지 않는다면 토큰을 추가한다.
    h1.classList.toggle("clicked");
}


h1.addEventListener("click", handleTitleClick) 