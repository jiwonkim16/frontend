import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;
function App() {
  return (
    <Container>
      <H1>Protected</H1>
    </Container>
  );
}

export default App;

// Prop Types 는 코드가 실행되고 난 후에 잘못된 것을 알려주지만 타입스크립트를 쓰면 코드 실행 전 오류를 뱉기 때문에 좀 더 상위호환.
// 그래서 component에 props를 보낼 때 타입 지정하는 방법
// interface 를 해주면 되는데 interface가 뭐냐하면 객체모양을 타입스크립트에게 설명해주는 타입스크립트의 개념이다.
// interface CircleProps {} 라고 작명하고 이 interface 안에 타입스크립트에게 오브젝트 모양을 설명해준다.
// interface CircleProps {bgColor : string} 이라고 하면 prop에 대한 타입을 지정해주었고 이 bgColor는 오브젝트 안에서 발견된다.
// function Circle ({bgColor} : CircleProps) {return ......} 이렇게 작성하면 props의 타입이 뭔지 컴포넌트에게 알려주게 된다.

// interface 예시
// interface PlayerShape {
//   name: string;
//   age: number;
// }
// const sayHell = (playerObj: PlayerShape) =>
//   `Hello ${playerObj.name}, you are ${playerObj.age} old`;
// sayHello 라고 하는 함수의 매개변수에 interface 를 지정해주면 오브젝트의 모양과 타입을 정해주었다!!

// ?? 는 Null 병합 연산자이다.
// ?? 앞의 값이 null 이거나 undefined이면 오른쪽 값을 그렇지 않으면 왼쪽 값을 반환하는 논리연산자 이다.
// 예시로  null ?? "hello" → "hello"
// undefined ?? "hello" → "hello"

// optional props
// 예를 들어
// const player : {name : string, age: number} = {name:"jiwon"}
// 이런 오브젝트가 있다라고 가정했을 때 이 경우에 타입스크립트는 오류를 줄텐데 이유는 age 값이 숫자로 명시되어 있는데
// 오브젝트 내 age라는 것을 찾을 수 없기 때문이다.
// 그런데 age라는 것이 player와 같은 오브젝트들에 있는 것도 있고 없는 것도 있다라고 한다면 age의 타입을 선택적으로 만들어주면 되는데
// 그럴 때 사용하는 것이 optional 타입이다.
// const player : {name : string, age ?: number} = {name : "jiwon"}
// 이 코드에서는 아무런 오류가 발견되지 않을 것이고 age의 타입을 살펴보면 number | undefined 라고 되어있다!

// 타입스크립트와 react state
// const [counter, setCounter] = useState(0); 보다시피 타입스크립트는 어디에도 쓰지 않았는데 타입스크립트는 counter와
// setCounter가 number 타입이라고 알고 있다. 어떻게 된거냐면 default 값인 0을 기반으로 알아서 추론 한것이다.
// 그래서 setCount(2)는 잘 작동하지만 setCount("2") 는 오류를 반환한다.
// 결론! 타입스크립트는 똑똑해서 타입스크립트를 쓰지 않았더라도 디폴트 값을 기반으로해서 state와 modifier 함수가 어떤 타입을
// 쓰는지 추론한다!

// 타입스크립트와 react를 이용해서 form 구현
// 만약 form 태그 안에 input의 value를 가져오려면 input에 value와 onChange 이벤트를 넣어줘야 하고 데이터를 저장할 state와 modifier
// 함수도 만들어주면 된다.
// 그런데 이때 리액트에선 event 라는 인자의 타입을 고려하지 않았으나 타입스크립트에서는 event를 any타입으로 생각하는데 any 타입은
// 가급적 사용하지 않는 것이 좋기 때문에 const onChange = (event : React.FormEvent) =>{} 와 같이 리액트 내 event의 타입을 지정
// 해주면 된다. (이런건 구글링해서 찾자!)
// FormEvent를 보게 되면 어떤 종류의 element가 이 onChange 이벤트를 발생시킬지 특정할 수 있다고 나오는데
// 고로 React.FormEvent<HTMLInputElement> 라고 적어준다.
// 그러면 타입스크립트는 이 onChange 함수가 inputElement에 의해 실행될 것을 알게 된다.
// 그리고 나서 event가 발생한 곳의 값을 알고 싶다면
// event.target.value 가 아니라 event.currentTarget.value 를 찍어야 하는데
// 왜 target 이 아니라 currentTarget 면 차이는 없지만 리액트-타입스크립트에서는 currentTarget으로 사용키로 했다.
// 그래서 코드를 예로 들면
// const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//   const {
//     currentTarget: { value },
//   } = event;
//   setValue(value);
// };
// 위와 같이 작성할 수 있는데 여기서 처음보는 구조가 있는데 이건 const value = event.currentTarget.value 와 같은 의미이다.
// es6 문법인데, 만약에 currentTarget안에서 value, tagName, width, id 이 4개를 가져오고 싶다고 하면
// const value = event.currentTarget.value;
// const tagName = event.currentTarget.tagName;
// const width = event.currentTarget.width;
// const id = event.currentTarget.id;
// 이렇게 써야 할텐데
// 이런 것들을 아래와 같이 바꿔 쓸 수 있다.
// const {currentTarget:{value, tagname, width, id}} = event
// 위에 같은 경우에는 event안 currentTarget안에 있는 값을 가져와야 되서 currentTarget: 이 붙은 것이며, 만약
// event 안에 있는 속성만 가져와 변수를 만드려고 한다면 그냥 const {x, y} = event; 가 된다.
// const x = event.x   const y = event.y 와 같은 의미.
// 그럼 이제 다시 돌아와서 타입스크립트가 setValue는 string을 받아야 한다고 인식하고 있다.(useState초기값이 문자열이기 때문)
// 그리고 onChange 이벤트가 type="text" 인 input에 의해 만들어졌고 그렇기에 currentTarget의 value가 string이란걸 타입스크립트가
// 알고 있다!!

// 그럼 form 태그에도 onSubmit 이벤트를 넣어주려면 먼저 이벤트 함수를 만들어줘야 하며, 타입스크립트를 이용해서 form에
// 타입을 적용해야 한다.
// 위에서 한 것과 거의 동일하다. 그래서 코드는 아래와 같다.
// const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//   event.preventDefault();
//   console.log(value);
// };

// 타입스크립트와 styled components, Theme을 연결해보자!
// 첫번째로 스타일 컴포넌트를 설치해주고
// 두번째는 declaration(선언) 파일을 만들어야 한다.
// 그래서 styled.d.ts 파일을 만들어 줄건데 src안에서 생성하고 https://styled-components.com/docs/api#typescript 링크에서
// create a declaration file에 있는 내용을 가져온다. 이렇게 하는 이유는 Theme에 사용할 타입을 포함시키고 싶기 때문에!
// 그리고 styled.d.ts 파일을 보면 interface 가 있는걸 볼 수 있고 내부에 각 요소는 내가 쓸 props로 변경해주거나 추가하면 된다.
// 세번째로 Theme 을 만들 파일을 생성한다. 이때 파일 안의 테마는 정의파일(styled.d.ts) 속 속성들과 똑같아야 한다.
// 그리고 index 파일로 가서 app컴포넌트를 ThemeProvider로 감싸주고 적용하고 싶은 theme을 속성으로 넣어주면 된다.
