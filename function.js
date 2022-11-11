

function makeBurger(type,size,num){
    console.log("빵두기")
    console.log("상추두기")
    
    // 1
    if(num < 1){
        return "버거개수가 0개 입니다." // return 을 만나는 순간 함수가 끝난다.
    }

    // 2
    if(type == "불고기"){
        console.log("고기패티두기")
    } else if (type == "새우"){
        console.log("새우패티두기")
    }
    console.log("뚜껑덥기")
    console.log("매개변수값은?",type,size,num)
    console.log(type,"버거",size,"사이즈",num,"개")

    return "완료되었습니다." // return 을 만나는 순간 함수가 끝난다.
}

let result = makeBurger("불고기","L",5);

console.log("버거 프로세스 결과", result)


// 3. 함수안에 함수를 담을 수 있다. 매개변수가 있는 함수인 경우 매개변수도 넘겨줘야 함.
function test1(){
    console.log("test1")
}
function test2(){
    console.log("test2")
}

function SetBurger(){
    test1()
    test2()
    makeBurger("불고기","L",5) // 매개변수를 넘겨줘야 한다.
}

SetBurger()