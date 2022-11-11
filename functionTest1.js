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

//3. 해결못함.
function findSmallestElement(arr) {
	let result = arr[0];
	if (arr === 0 ) {
		return 0;
	}
  for (let i = 1;i < arr.length; i++){
		if(result > arr[i]){
			result = arr[i];
		}
	}
	return result;
}

console.log(findSmallestElement([100,200,3,0,2,1]));

// console.log(findSmallestElement([100,200,3,0,2,1]));
// findSmallestElement([100,200,3,0,2,1]);




//4.
// function moneyCount(money){
//     // 10000 을 뺀 나머지 값
//     let million = money % 10000
//     // 10000 원의 개수
//     let test1 = money - million

//     console.log(million,"dd")
//     console.log(test1,"ddd")

//     if( money % (5000 * 2) === 0){
//         console.log(money)
//         return "나머지값이 있음"
//     } 
// }

// moneyCount(12300)