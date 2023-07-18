const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

// 버튼에 신경을 쓰지 않아도 되는이유 : 버튼을 안누르고 입력 후 엔터키를 눌러도 form은 submit되기 때문.

function onLoginSubmit(event){  // 이 이벤트가 이벤트리스너에 의해 실행될 때 사실 브라우저가 함수를 호출하면서 function() 과 같이 비어있는 상태가 아니라 첫번째 인자로써 추가적인 info를 가진채로 호출하게 됨. 
 // 즉, 모든 이벤트 리스너 함수의 첫번째 인자는 항상 지금 막 벌어진 일들에 대한 정보임. 그리고 js가 인자 공간만 주면 거기에 정보를 채워넣음.
    event.preventDefault()  // 어떤 이벤트의 기본행동이 발생되지 않도록 막는 기능. 즉, input의 submit이나 boutton을 누르면 form이 submit 되면서 자동으로 새로고침 되는데 이를 막는 기능.
    loginForm.classList.add(HIDDEN_CLASSNAME) //css에 display:none 스타일을 적용받은 class를 login-form에 더함.
    const username = loginInput.value
    localStorage.setItem(USERNAME_KEY, username)
    paintGreeting(username)
}

function paintGreeting(username){
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
} else { 
    paintGreeting(savedUsername)

}
