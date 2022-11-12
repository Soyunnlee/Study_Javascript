function greet(name,name2){
    console.log("안녕 내 이름은",name2,"야")
}

greet("제시카","할리")

//2. 조건문을 작성할때 year 가 참이면 거기서 함수가 끝나버리므로 모두 year 만 출력되는 문제가 있었다.
// 따라서 조건문을 작성할때 year, month , date 를 역순으로 활용하면 문제를 해결할 수 있었다.
function meetAt (year,month,day){
    let todayYear = year;
    let todayMonth = month;
    let todayDay = day;

    if(day){
        return `${todayYear}/${todayMonth}/${todayDay}`;
    } else if (month){
        return `${todayYear}년 ${todayMonth}월`
    } else {
        return `${todayYear}년`;
    }
}
console.log (meetAt(2022))




//3. 제일 작은수를 반환하라
function findSmallestElement (arr){
    // 어레이가 비어있다.
    if (arr.length === 0){
        return 0
    }
    let result = arr[0] // 배열의 첫번째 값을 들고와서 비교할것이다.
    // for문 : 100은 들고 있으므로 200부터 비교함. 
    // 어디까지돌것인가? arr.length = 배열의 길이까지 돈다.
    for(let i=1; i<arr.length; i++){
        if(result > arr[i]){
            //result 에 있는값이 arr[i] 번째에 있는 값보다 크다면
            // arr[i] 에 있는값을 result 에 담아준다.
            result = arr[i]
        }
    }  
    return result
}

// console.log(findSmallestElement([300,100,3,0,2,1]));


//4. 몇개의 지폐와 동전이 필요한지
// function money (a){
//     let arr = [50000,10000,5000,1000,500,100]

//     let bb = {
//         50000 : 0 ,
//         10000 : 0 , 
//         5000 : 0 ,
//         1000 : 0,
//         500 : 0,
//         100 : 0,
//     }

//     for (let i=0; i <= arr.length ;i++){
//         if( Math.floor(a/arr[i]) >= 1 ){ 
//             // arr[i] 로 나눈 나머지값이 1 보다 크거나 같을경우
//             result = Math.floor(a/arr[i])
//             bb[arr[i]] = result
//         } else {
//             result = 0
//         }
//         a = a % arr[i];
//         console.log(bb)
//     }

//     console.log(bb[500])
// }


let unit = [50000,10000,5000,1000,500,100]
// function changeCalculate(money) {
//   for(let i=0;i<unit.length;i++){
    
//       let num = Math.floor(money / unit[i])
//       console.log(unit[i]+"X"+num)
//       money = money - (unit[i]*num)
    
//     }
// }

// changeCalculate(12600)


function money(a){
    for(let i = 0; i < unit.length; i++){
        let num = Math.floor(a/unit[i])
        console.log(unit[i] + "=" +num)
        a = a % unit[i]
    }
}

money(12600)