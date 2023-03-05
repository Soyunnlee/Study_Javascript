// call 메서드는 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정할 수 있습니다.
const mike = {
    name: "Mike",
  };
  
  const tom = {
    name: "Tom",
  };
  
  function showThisName(){
    // 여기서 this 는 window 를 가르킨다.
    console.log(this.name);
  }
  
  // update 함수는 생년과 직업을 받아서
  function update(birthYear, occupation){
    // this 객체의 정보를 새로운 정보로 업데이트 해준다.
    this.birthYear = birthYear;
    this.occupation = occupation;
  }
  
  
  
  update.call(mike, 1999, 'singer' )
  console.log(mike) // { name:"Mike", birthYear: 1999 , occupation: "singer" }

  
  update.call(tom, 2000, 'teacher')
  console.log(tom) // { name:"Tom", birthYear: 2000, occupation: "teacher" }
  
  update.apply(mike, [1999, 'singer'] )
  console.log(mike) // 결과는 동일하다.

  update.apply(tom, [2000, 'teache'])
  console.log(tom) // 결과는 동일하다.

  // apply
  // apply는 함수 매개변수를 처리하는 방법을 제외하면 call 과 완전히 같습니다.
  // call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만, apply는 매개변수를 배열로 받습니다.

  const nums = [3,10,1,6,4]

  // apply 는 두번째 매개변수로 배열을 전달하면 그 요소들을 차례대로 인수로 사용한다.
  // const minNum = Math.min(...nums);
  // const maxNum = Math.max(...nums);
  
  const minNum = Math.min.apply(null, nums);
  // Math.min.apply(null,[3,10,1,6,4])
  const maxNum = Math.max.call(null, ...nums);
  // Math.min.call(null,3,10,1,6,4);
  // const maxNum = Math.max.call(null, ...nums);
  
  console.log(minNum); // 1
  console.log(maxNum); // 10


  // ------- 실제 사용 예제 -------- //
  const user = {
    name: "Mike",
    showName: function(){
      console.log(`hello ${this.name} `);
    },
  };
  
  // user 가 this 가 된다.
  user.showName(); // hello Mike
  
  // 호출을 하면서 this 를 잃어버리게 된다.
  let fn = user.showName;
  fn(); // hello
  
  // 이럴때엔 call (또는 apply) 을 사용한다.
  fn.call(user); // hello Mike
  fn.apply(user); // hello Mike
  
  // bind 사용할때.
  let boundFn = fn.bind(user);
  boundFn(); // hello Mike.