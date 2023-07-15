// document.getElementById("id") // id이름이 id인 태그 선택
// document.getElementsByClassName("")
// document.querySelector("#id h1") //(id이름이 id인 태그 안에 h1태그를 선택)element를 css형식으로 부를 수 있다.
// document.querySelectorAll(".class h1") // class이름이 class인 태그 안에 모든 h1태그를 선택

// 각 element별 event 를 검색해보시길..mdn 아니면 console.dir에서 on으로 시작하는 프로퍼티 확인할 수 있음.

const h1 = document.querySelector("div h1")

function handleH1Click(){
    h1.style.color = "wheat"
}

function handleMouseEnter(){
    h1.style.color = "blue"
    h1.innerText = "Mouse is here!!"
}

function hanleMouseLeave(){
    h1.style.color = "tomato"
    h1.innerText = "Mouse is gone"
}
h1.onclick = handleH1Click;
h1.addEventListener("mouseenter", handleMouseEnter)
h1.addEventListener("mouseleave", hanleMouseLeave)
// .removeEventListener로 이벤트 제거 가능


function handlWindowResize(){
    document.body.style.backgroundColor = "tomato"
}
function handleWindowOffline(){
    alert("SOS no WiFi")
}

window.addEventListener("resize", handlWindowResize)
window.addEventListener("offline", handleWindowOffline)