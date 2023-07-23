const toDoForm = document.getElementById("todo-form")
const toDoInput = document.querySelector("#todo-form input")  // toDoForm.querySelector("input")과 같은 의미
const toDoList = document.getElementById("todo-list")

let toDos = []  // <저장하기 1.>localStorage에 저장하기 위해 비어있는 array를 만듬.
// const로 선언하지 않고 let으로 선언한 이유 : 브라우저가 실행될때마다 항상 빈값으로 시작하기 때문에 localStroage에 값을 넣어도 새로고침하면 값이 덮어씌워짐.
// 즉, 값이 업데이트 가능하게 하고 localStorage에 toDo들이 있으면 toDos에 parsedToDos를 넣어서 전에 있던 toDo들을 복원하기 위해

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos))  // <저장하기 3.> 이 함수의 목적은 toDos array의 내용을 localStorage에 넣는 것.
}  // ⭐JSON.stringify()는 javaScript object나 array 또는 어떤 javascript 코드건 간에 그걸 string으로 바꿔줌!!!
   // 여기서는 toDos라고 하는 array를 string으로 변환.

// 1. 여러 버튼은 모두 같은 이벤트가 실행되는데 이 중 어떤 버튼이 눌렸는지 알기 위해서 event와 button내부의 값을 살펴봄.
function deleteToDo(event){  // 1. 클릭에 대한 event, 이 event를 콘솔에 찍어보면 내부 요소 중 target은 event가 실행된 위치를 갖고 있음.(즉, 어떤게 click 되었는지) 
    // 1. 그 결과 event.target은 button이며,
    const li = event.target.parentElement  // 2. 그렇다면 button을 console.dir로 찍어보면
    // 2. parentNode, parentElement라는 값을 가지고 있는데 이게 누가 그 버튼의 부모인지 알 수 있음. (이 경우 부모는 li)
    li.remove(); // 3. 클릭된 버튼의 부모요소인 li를 지운다.
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))  // <삭제하기 2.>
    saveToDos();
}

function paintToDo(newToDo){
    const li = document.createElement("li")  // 1. li 태그 생성
    li.id = newToDo.id  // newTodoObject를 선언한 이후부터 newToDo에 id가 생김. 그러므로 내가 삭제하고 싶은 list를 알기위해 id를 넣어줌.
    const span = document.createElement("span")  // 2. span 태그 생성 / 단순히 li로 리스트를 만들기보단 span을 활용해서 만들고 싶고 li안에 버튼도 만들어줄 예정이기 때문에.
    // 하지만 이 span은 지금 li안에 있지 않음. 그래서
    span.innerText = newToDo.text; // 4. 그럼 span의 텍스트는 handleToDoSubmit에서 온 newToDo 텍스트가 됨.
    const button = document.createElement("button")  // 6. list를 지우기 위한 버튼을 만들어줌.
    button.innerText = "X" // 6. 버튼에 x 모양을 추가
    button.addEventListener("click", deleteToDo)  // 7. 버튼에 click 이벤트를 줌. 버튼이 click 되면 deleteToDo함수 실행
    li.appendChild(span);  // 3. li안에 span을 넣어줌으로써 li태그는 span태그를 자식으로 갖게 됨.
    li. appendChild(button)  // 7. 버튼을 li안에 넣어줌.(span다음에 오게끔) 그리고 appendChild는 가장 마지막에 와야함!
    toDoList.appendChild(li);  // 5. 이제 li를 ul태그 안에 넣어주기만 하면 됨. 여기까지 하면 화면에 todo가 표시됨. 다만, list에 item을 추가할 수는 있지만
    // 지울 수 없다는 문제와 새로고침하면 list가 사라지는 문제가 있음.
}

function handleToDoSubmit(event){
    event.preventDefault()
    const newToDo = toDoInput.value  // input의 현재 value를 새로운 변수에 복사하는 행위.
    // 먼저 입력값을 저장한 다음 그 후에 toDoInput의 값을 비움. 즉, toDoInput의 값을 비웠다고해서 newToDo가 비워지는 것을 의미하는 것은 아니란 것임.
    toDoInput.value=""  // 내가 enter를 누르면 toDoInput의 모든 입력값이 사라지게 하고 싶다.
    const newTodoObject = {
        text:newToDo, id:Date.now()  // <삭제하기 1.>어떤 todo를 localStorage에서 지원야 하는지 알기 위해 id를 주고 싶음. 예를들어 {id:121212, text:"drink"}와 같이..
        // 그래서 id에 Date.now()라는 함수를 사용함!  Date.now()는 밀리초를 주는 함수임.
        // 그리고 db에 todo내용을 추가하는 이곳에 만들어줌!
    }
    toDos.push(newTodoObject);   //<저장하기 2.>그리고 이제 toDoInput.value인 newToDo가 그려질 때마다 그 텍스트를 array에 push함.
    // 그리고 이제 localStorage에 저장하고 싶지만 localStorage에는 array를 저장할 수 없고 무조건 텍스트만 저장할 수 있음..

    paintToDo(newTodoObject)  // 현재 이 함수(handleToDoSubmit)가 paintToDo함수를 실행시키고 newToDoObject(id가 포함되어 있는 newToDo)를 보냄.
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit)

// saveToDos()
const savedToDos = localStorage.getItem("todos") // <저장하기 3→가져오기 1.>setitem은 저장, getitem은 가져오기.

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos) // <가져오기 2.>JSON.parse()는 JSON.stringify와 반대로 string을 살아있는 javascript object 즉, array로 만들어줌.
    // array는 자바스크립트에서 매우 중요한 data structure임. array 각각의 item을 가지고 무언가를 하기위해(함수를 실행하거나 화면에 출력하거나 텍스트를 변형하는 등등)
    // 자바스크립트는 array에 있는 각각의 item에 대해 function을 실행할 수 있게 해줌.
    toDos = parsedToDos // localStorage에 toDo들이 있으면 toDos에 parsedToDos를 넣어서 전에 있던 toDo들을 복원하기 위해
    parsedToDos.forEach(paintToDo); // <가져오기 3.>parsedToDos가 array이기 때문에 forEach 메서드를 가짐.
    // 그리고 forEach는 array안의 각 item에 대해서 함수를 실행해줌. 이 경우에는 paintToDo라는 함수를 실행.
    // 하지만 이건 array의 item들에 대해 한개의 function만 실행할 수 있게 해주는데,
    // 어떤 item에 대해 함수가 실행되었는지를 모르면 무용지물임..
    // ⭐⭐⭐그러나 자바스크립트는 submit eventListener가 event(argument)를 그냥 제공해주는 것처럼
    // ⭐⭐⭐지금 처리되고 있는 item(argument) 또한 그냥 제공해줌.
    // ⭐⭐⭐이 경우엔 자바스크립트는 이 array를 가지고 paintToDo("각 아이템") 해주는 것과 마찬가지임!!
    // ⭐⭐⭐이런 기능을 forEach메서드가!!
    // arrow function를 쓰면 좀 더 짧게 표현도 가능함. ex. parsedToDos.forEach((item)=>console.log("this is the trun ~~"))
}


