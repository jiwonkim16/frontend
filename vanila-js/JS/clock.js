const clock = document.querySelector("h2#clock")

function getClock(){
    const date = new Date();  // new Date()는 날짜와 시간을 다루기 위한 내장 객체임. 이 객체를 사용하면 날짜와 시간을 표현, 조작할 수 있음.
    // 위처럼 new Date()를 호출하면 현재 시간의 Date 객체가 생성됨.
    const hours = String(date.getHours()).padStart(2,"0")
    const minutes = String(date.getMinutes()).padStart(2,"0")
    const seconds = String(date.getSeconds()).padStart(2,"0")
    clock.innerText =`${hours}:${minutes}:${seconds}`
}
setTimeout(getClock, 1)  // setTimeout 함수는 지정된 시간이 경과된 후에 함수를 호출하는 js 내장 함수, (실행할 함수, 실행까지 대기할 ms단위의 시간)
setInterval(getClock, 1000)// setInterval 함수는 지정된 시간 간격마다 주어진 함수를 호출하는 js 내장함수, (실행할 함수, 함수호출 사이의 대기 시간을 ms단위로)

