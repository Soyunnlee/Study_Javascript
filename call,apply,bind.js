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
  console.log(mike)
  // { name:"mike", birthYear: "singer", occupation: 1999 }
  
  update.call(tom, 2000, 'teacher')
  console.log(tom)
  
  // apply
  // apply는 함수 매개변수를 처리하는 방법을 제외하면 call 과 완전히 같습니다.
  // call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만, apply는 매개변수를 배열로 받습니다.