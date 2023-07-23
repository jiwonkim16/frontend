
// CLOCK----------------------------------------------------------------------------------------------------------------
let clock = document.querySelector('.clock')
function getClock() {
    const date = new Date();  // new Date()는 날짜와 시간을 다루기 위한 내장 객체임. 이 객체를 사용하면 날짜와 시간을 표현, 조작할 수 있음.
    // 위처럼 new Date()를 호출하면 현재 시간의 Date 객체가 생성됨.
    const hours = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")
    const seconds = String(date.getSeconds()).padStart(2, "0")
    clock.innerText = `${hours}:${minutes}:${seconds}`
}
setTimeout(getClock, 1)  // setTimeout 함수는 지정된 시간이 경과된 후에 함수를 호출하는 js 내장 함수, (실행할 함수, 실행까지 대기할 ms단위의 시간)
setInterval(getClock, 1000) // setInterval 함수는 지정된 시간 간격마다 주어진 함수를 호출하는 js 내장함수, (실행할 함수, 함수호출 사이의 대기 시간을 ms단위로)
//----------------------------------------------------------------------------------------------------------------------------------------------------------
// Location-----------------------------------------------------------------------------------------------
function onGeoOk(position) {

    const lat = position.coords.latitude
    const lng = position.coords.longitude
    const API_key = "644c72ac73a88cbfdfe5222010672164"

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_key}&units=metric`;
        // openweathermap.org라고 하는 weather API
    // 여러 API 방식 중에 좌표를 입력할 수 있는 URL을 가져옴

    fetch(url).then((res) => res.json()).then(data => {   //url로 요청을 보내서 data라는 값을 얻어옴
                // fetch는 promise임 promise는 당장 무언가 일어나지 않고 시간이 조금 걸린 뒤에 일어나는 것
        // 그래서 기다리지 않기 위해서 then을 사용함. 다음으로 response를 받아야 함 그리고 respose의 json을 얻어야 함.
        // 그리고 내용을 추출했으면 data를 얻음.
        const weather = document.querySelector(".current__weather")
        const city = document.querySelector(".current__location")
        city.innerText = data.name
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;   // `${}` 이 템플릿 리터럴이 백틱 안의 내용을 string 으로 만들어줌. 
    })
}  // 템플릿 리터럴(template literal)은 문자열을 더욱 편리하게 처리할 수 있는 새로운 형식의 문자열 표현법. 
// 템플릿 리터럴의 주요 기능은 문자열 내에 표현식을 삽입할 수 있다는 것.  이를 통해 문자열을 간편하게 조합하고, 복잡한 문자열 작업을 줄일 수 있음.

function onGeoError() {
    alert("Can't find you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)  // 이 navigator 함수는 사용자의 위치(geolocation)을 알려줌. 
// getCurrentPosition()은 2개의 인자를 필요로 하는데 1. 모든게 잘 됬을때 실행될 함수  2. 에러가 났을 때 실행될 함수
// 또 getCurrentPosition()함수는 성공했을 때 GeolocationPositison object를 준다고 되어 있음.
// GeolocationPositison object를 살펴보면 coords(좌표값)을 확인할 수 있고 그 안에 위도, 경도 값도 확인할 수 있음.

// BACKGROUND---------------------------------------------------------------
const img = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"]
const randomImg = img[Math.floor(Math.random() * img.length)]    // 필요한 숫자는 0~3까지이기 때문에 *images.length
// Math object는 수학과 관련된 메서드의 모음

const bgimage = document.body.style; 
bgimage.backgroundImage = `url("./images/img/${randomImg}")`
bgimage.backgroundSize = "cover"
bgimage.backgroundPosition = "center center"
bgimage.backgroundRepeat = "no-repeat";
bgimage.backgroundAttachment = "fixed";

//Login-------------------------------------------------------------------------
const loginForm = document.querySelector('.login')
const loginInput = loginForm.querySelector('.login__input')
const loginButton = loginForm.querySelector('.login__submit')  // 버튼에 신경을 쓰지 않아도 되는이유 : 버튼을 안누르고 입력 후 엔터키를 눌러도 form은 submit되기 때문.
const greeting = document.querySelector('#greeting')
const inputGreeting = document.querySelector('.todo__hidden')
const todoListGreeting = document.querySelector('.todoList__hidden')

const todoForm = document.querySelector('.todo__hidden')
const todoInput = todoForm.querySelector('.todo-input__hidden')
const todpButton = todoForm.querySelector('.submit__hidden')

function onLoginBtnClick(event){
    event.preventDefault()
    const username= loginInput.value
    if(username===""){
        alert("Please write your name")
    }else if(username.length > 14){
        alert("Your name is too long")
    }
    loginForm.classList.add("hidden") // 이제 할 일은 form은 숨기고 h1이 표시되도록!(h1에 표시할 텍스트가 있을 때만)
    greeting.innerText = `Hello ${username}!!` //여기까지하면 form은 숨겨지나 h1의 class는 그대로 hidden.
    //string을 합치는 방법: 템플릿 리터럴
    greeting.classList.remove("hidden")
    inputGreeting.classList.remove("hidden")
    todoListGreeting.classList.remove("hidden")     // 첫화면에는 숨어있다가 로그인 되면 나옴.
}

function inputTodoList(event){
    event.preventDefault()
    const todoList = todoInput.value;
    if(todoList===""){
        alert("Please write what todo")
    }else if(todoList.length > 15){
        alert("Too long!!!")
    }

}
todoForm.addEventListener("submit", inputTodoList);
loginForm.addEventListener("submit", onLoginBtnClick);
//todo----------------------------------------------------------
const toDoForm = document.querySelector(".todo__hidden")
const toDoInput = document.querySelector(".todo-input__hidden")
const toDoList = document.querySelector(".todo-list")

let toDos = [] 

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos))
}

function deleteToDo(event){  
    const li = event.target.parentElement
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)) 
    saveToDos();
}

function paintToDo(newToDo){
    const li = document.createElement("li")  
    li.id = newToDo.id  
    const span = document.createElement("span")  
    span.innerText = newToDo.text;
    const button = document.createElement("button") 
    button.innerText = "X" 
    button.addEventListener("click", deleteToDo)  
    li.appendChild(span); 
    li. appendChild(button) 
    toDoList.appendChild(li); 
}

function handleToDoSubmit(event){
    event.preventDefault()
    const newToDo = toDoInput.value 
   
    toDoInput.value="" 
    const newTodoObject = {
        text:newToDo, id:Date.now()  
    }
    toDos.push(newTodoObject);  

    paintToDo(newTodoObject) 
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit)


const savedToDos = localStorage.getItem("todos")

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos) 
    toDos = parsedToDos // localStorage에 toDo들이 있으면 toDos에 parsedToDos를 넣어서 전에 있던 toDo들을 복원하기 위해
    parsedToDos.forEach(paintToDo); }

//----------------------------------------------------------------------------------------------------