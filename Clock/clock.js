const clock = document.querySelector("h2#clock")

// clock.innerText = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`

function getClock(){
    const date = new Date();
    // console.log(`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`)
    const hours = date.getHours();
    const minutes = date.getMinutes();
    // .padStart 는 문자열을 반환하기 때문에 Stringdmfh 바꾸어준다.
    const seconds = String(date.getSeconds()).padStart(2,"0"); 

    clock.innerText = `${hours}시 : ${minutes}분 : ${seconds}`
}



getClock(); // getClock 을 즉시 호출하고 ,
setInterval(getClock , 1000); // 그러고 나서 매초마다 getClock을 실행한다.





// intervals : '매번' 일어나야 하는 무언가.
            // 예를 들어 매번 2초마다 무언가를 일어나게 하고 싶을때 쓰는것
            // 서버를 체크해야 한다거나 or 매2초마다 주식시장 api 를 확인해야 한다거나 
            // setInterval(sayHello , 5000) // 5초마다 실행됨 

// timeout : 먼저 호출하려고 한느 function 을 넣어준다.
            //  그리고 얼마나 기다릴지 ms 단위로 넣어주면 된다.


//------ Part 2 ------//

// "1".padStart(2,"0") 
// padStart 라는 함수는 
// 앞에있는 string 의 길이를 2로 만드는데 만약 그 string 의 길이가 2가 아니라면 "0" 을 추가한다.
// 01 로 출력된다.
// padEnd() 도 제공한다. 
// "hello".padEnd(20,"x") // 'helloxxxxxxxxxxxxxxx'

// new Date().getHours() // 17 
// number 가 출력된다. 이걸 string 으로 바꾸고 싶을경우
// String(new Date().getHours()) // "17" 로 출력된다.