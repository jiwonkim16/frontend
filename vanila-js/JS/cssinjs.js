//css와 js를 연결하는 방법..js→html→css
// h1 {
//    color: cornflowerblue;}
// .active {
//    color: tomato;} active라는 클래스 스타일을 지정해주고 js에서 h1의 className을 active로 지정.
// 한번 더 클릭하면 className을 지우면 원래 색으로 돌아옴.
// 그 결과 event2.js와 같은 결과!!

const h1 = document.querySelector("div h1")

function handleH1Click(){
    if(h1.classList.contains("active")){
        h1.classList.remove("active")
    }else{
        h1.classList.add("active")
    }
}
h1.addEventListener("click", handleH1Click);

// className은 기존에 있던 className까지 변경함에 따라 문제가 생길 수 있음.
// classList.contains는 명시한 class가 HTML element의 class에 포함되어 있는지 말해주고
// remove나 add를 통해 원하는 class만 변경.

// class List에 toggle function은 classList에 해당 class name이 존재하는지 확인하고 만약 그 class name이 존재한다면
// toggle은 class name을 제거한다. 그러나 만약 class name이 존재하지 않는다면
// toggle은 class name을 추가한다.
// 즉 위의 classList remove,contains,add 코드를 한번에 대체할 수 있는 function임.

const h2 = document.querySelector("div h2")

function handleH1Click(){
    h1.classList.toggle("active")
}
h1.addEventListener("click", handleH1Click);

