let patient = {
	name :"jimin",
  age :  17,
  disease : "cold",
}

console.log(patient)

console.log(patient.age)
console.log(patient["age"])

// 이름을 jimin -> jk 로 바꿔준다
patient.name = "jk"
console.log(patient)
patient.age = 26
console.log(patient["age"])

let patientList = [{
  name: "gimin" ,
  age : 13,
},{
	name : "jk",
  age : 25,
},{
	name : "soyun"
}]

console.log(patientList)
console.log("첫번째 환자 :" ,patientList[0])
console.log("첫번째 환자 나이는?" , patientList[0].age)
console.log("첫번째 환자 나이는?" , patientList[0]["age"])

console.log("두번째 환자의 이름" , patientList[1].name)

