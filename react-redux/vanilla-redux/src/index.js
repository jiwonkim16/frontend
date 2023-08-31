import { createStore } from "redux";
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text) => {
  return { type: ADD_TODO, text };
};

const deleteToDo = (id) => {
  return { type: DELETE_TODO, id };
};

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      return state.filter((toDo) => toDo.id !== parseInt(action.id));
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e) => {
  const id = e.target.parentNode.id;
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);

// store.dispatch({ type: ADD_TODO, text: toDo });
// 위와 같이 action엔 변수도 넣어줄 수 있다. (여기선 toDo가 input태그의 value를 가지는 변수임.)

// mutate state는 절대 절대 하지 말것.
// mutation 이란 array.push("1") 이런 것 처럼 기존 데이터를 변형하지 말라는 의미.
// 새로운 state를 create 하고 그 새로운 state를 return 해야만 함.

// id와 같이 고유한 값을 가져야 하는 것은 Date.now() 를 쓰는 것이 좋음.ㅎㅎ
// return [...state, { text: action.text, id: Date.now() }];

// action creator은 오브젝트를 리턴하는데 그 오브젝트는 action에 보내진다.
// 그리고 리턴한 값은 dispatch를 위해 이용된다.

// state를 mutate 하지 않고 새로운 state를 만들어서 활용한다는 점.
// 그래서 새로운 todo가 추가되면 새로운 array를 생성해서 기존 array의 내용에
// 더하고 새로운 todo오브젝트에 더한다.

// 삭제도 마찬가지 새로운 state를 만들고 filter를 이용해서 조건에 맞게 거른 뒤
// 새로운 오브젝트를 리턴하고 있다.
