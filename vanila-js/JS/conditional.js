// 조건문
// "15를 15로 변경하는 방법
// parseInt(age)
const age = parseInt(prompt("how old are you?"))
//isNaN() 함수를 사용하면 숫자가 아닌지 boolean타입으로 결과 반환

// 조건문 구문
if(isNaN(age)|| age < 0){
  alert("Please write a real positive number")
}else if(age < 18){
  alert("you are too young")
}else if(age <= 50 && age >= 18){
  alert("you can drink")
}else if(age>50&&age<=80){
  alert("you should exercise")
}else if(age>80){
  alert("you can do whatever you want!")
}