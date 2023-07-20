const chose = document.querySelector('#chose')
chose.style.display = "none"

const result = document.querySelector('.game_result')
result.style.display = "none"

const click = document.querySelector('.click_btn')

const choseNumber = document.querySelector('.chose_number')
const machineNumber = document.querySelector('.machine_number')

function handleDisplayOn(event){ // handleDisplayOn() 함수에서 .display 대신에 .style.display 사용
    event.preventDefault()  // 그리고 기본 이벤트 동작을 막기 위해 클릭 이벤트에 preventDefault()를 호출
   //input type="submit"을 사용하면 폼 전송 시 페이지가 새로고침 되므로, 이를 방지하기 위해 event.preventDefault()나 button type="button" 사용합니다.
    chose.style.display = "block"
    result.style.display = "block"  // 보이도록 설정하려면 display에 "block" 값을 부여
    choseNumber.innerText = document.querySelector('#guess_number').value;
    //이 코드를 실행하면 클릭 이벤트 발생 시 화면이 새로고침되지 않고, chose와 result의 display 프로퍼티가 "block"으로 설정됩니다.
    
    const generateValue = document.querySelector('#generate_number').value // 아닙니다. val() 메소드는 없습니다. 값을 얻으려면 .value 속성을 사용해야합니다. 아래와 같이 수정할 수 있습니다:
    const randomNumber = Math.floor(Math.random()*(parseInt(generateValue)))
    machineNumber.innerText = randomNumber
    
//변수 choseNumber와 machineNumber는 각각 해당 요소를 가리키는데, 이 요소들은 <span> 요소입니다. 이렇게 DOM 요소를 직접 비교하는 대신, 이들 요소의 내용(text)을 비교하기 위해 .innerText를 사용합니다. DOM 요소 내의 텍스트를 얻거나 설정할 때, .innerText 속성을 사용하게 되고, 이렇게 처리된 값은 문자열로 처리됩니다. 때문에, DOM 요소 내의 값을 비교하려면 먼저 .innerText를 사용하여 값을 문자열로 가져오고, 필요한 경우 parseInt() 함수 등을 사용하여 숫자로 변환하여 비교할 수 있습니다.
    if(parseInt(machineNumber.innerText)===parseInt(choseNumber.innerText)){
        document.querySelector('.game_result').innerText = "You Win!!"
    }else{
        document.querySelector('.game_result').innerText = "You Lose!!"
    }
}

click.addEventListener('click',handleDisplayOn)



