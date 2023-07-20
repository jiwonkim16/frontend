const endDate = new Date('2023-12-25');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

function calculateTimeLeft() {
    const now = new Date();
    const diff = endDate - now;

    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        daysElement.textContent = days;
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;
    } else {
        daysElement.textContent = 0;
        hoursElement.textContent = 0;
        minutesElement.textContent = 0;
        secondsElement.textContent = 0;
    }
}

calculateTimeLeft();
setInterval(calculateTimeLeft, 1000);
//코드에 대한 설명:
//먼저 종료 날짜 (endDate)를 설정합니다.
//calculateTimeLeft 함수에서는 현재 날짜와 종료 날짜 사이의 차이를 밀리초로 계산합니다.
//밀리초 차이를 사용하여 남은 일수, 시간, 분, 초를 계산합니다.
//계산된 값들을 HTML 요소에 할당하여 화면에 표시합니다.
//calculateTimeLeft 함수를 처음 호출하고, setInterval()으로 1초마다 계속 호출하여 남은 시간을 갱신합니다.
//이로써 웹 페이지에 남은 시간을 일, 시, 분, 초 단위로 실시간으로 표시할 수 있습니다.

//해설:
//(1)
//const xmasDay = new Date(`${new Date().getFullYear()}-12-25:00:00:00+0900`);
//크리스마스 날짜를 얻기 위한 코드입니다.
//올해의 연도를 얻기 위해 getFullYear()함수를 사용했습니다. Date 함수는 기본적으로 미리 초로 계산되지만, Date의 인수로 문자열을 전달하면 지정된 형태로 날짜와 시간을 반환합니다. 여기선 템플릿 리터럴을 사용했습니다.
//위 코드는 Sat Dec 25 2021 00:00:00 GMT+0900 (한국 표준시)를 생성합니다.

//(2)
//const now = new Date();
//Date의 인수에 아무것도 적지 않으면 현재 시간을 생성해 줍니다.

//(3)
//const difference = new Date(xmasDay - now);
//Date 함수로 생성한 Date 객체는 연산이 가능합니다. 즉 xmasDay와 now를 연산할 수 있습니다.
//크리스마스까지 얼마나 남았는지를 알기 위해 xmasDay에서 now를 빼주고 그 값을 difference로 선언해 줍니다.

//(4)
//1초는 1000미리 초입니다. 미리 초 단위의 값을 가지고 있는 difference변수를 1000으로 나눠주어 secondsInMs에 저장해 줍니다.
//같은 방법으로 secondsInMs를 이용해 minutesInMs를 minutesInMs를 이용해 hoursInMs를 구해줍니다. 1시간은 60분, 1분은 60초, 하루는 24시간으로 나눠줍니다.
//Math.floor()은 나누기 후 생기는 소수점을 없애기 위해 사용합니다.

//1. const secondsInms = Math.floor(difference / 1000)
//2. const minutesInms = Math.floor(secondsInms / 60)
//3. const hoursInms = Math.floor(minutesInms / 60)
//4. const days = Math.floor(hoursInms / 24)

//(5)
//화면에 출력될 값을 가지고 있는 변수들입니다.
//출력되는 값들은 크리스마스까지 남은 일수, 남은 시간, 남은 분, 남은 초이므로 나머지 값을 얻을 수 있는 모듈러(%)연산을 사용해야 합니다.
//모듈러(%)연산을 할 때 시간, 분, 초의 단위에 맞춰 60 또는 24로 나눠주면 됩니다.

//1. const seconds = secondsInMs % 60
//2. const minutes = minutesInMs % 60
//3. const hours = hoursInMs % 24

//(6)
//남은 시간이 10보다 작아질 경우 앞에 0을 붙여 두 자리로 나타내기 위한 코드입니다. ex) 9h -> 09h
//위 코드에선 삼항연산자를 사용하고 있습니다. if 문처럼 생각하면 됩니다.   //삼항연산자란? 조건 (삼항) 연산자는 JavaScript에서 세 개의 피연산자를 받는 유일한 연산자입니다. 앞에서부터 조건문, 물음표(?), 조건문이 참(truthy)일 경우 실행할 표현식, 콜론(:), 조건문이 거짓(falsy)일 경우 실행할 표현식이 배치됩니다. 해당 연산자는 if...else문의 대체재로 빈번히 사용됩니다.
//삼항연산자 구문: condition ? exprIfTrue : exprIfFalse
//가장 먼저 daysStr을 살펴보면 days < 10이 if 문의 조건과 같은 역할을 합니다.
//0${days}` : days}부분의 왼쪽은 참일 때 실행할 식이고 오른쪽은 거짓일 때 실행할 식입니다.
//즉, days가 10보다 작을 때 0${days}가 클 때 days가 출력됩니다.
//같은 방법으로 hoursStr, minutesStr, secondsStr도 작성해 주면 됩니다.

//1. const daysStr = `${days < 10 ? `0${days}`: days}d`
//2. const hoursStr = `${hours < 10 ? `0${hours}`: hours}h`

//(7)
//clockTitle.innerHTML = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
//clockTitle의 innerHTML프로퍼티에 앞에서 구한 변수들을 넣어 화면에 출력해 주기 위한 코드입니다.

//(8)
//setInterval(getTime, 1000);
//setInterval함수를 사용해 getTime 함수를 1000미리 초(1초)마다 실행되게 해줍니다.
//하지만 이렇게 되면 브라우저가 시작하고 1초간은 시간이 화면에 나타나지 않습니다. 그러므로 setInterval()전에 getTime()을 먼저 한번 실행시켜 줍니다.

//결론
//미리 초 단위가 사용되다 보니 처음에 헷갈리는 부분이 있겠지만, 강의에서 배운 내용과 거의 동일하다 보니 충분히 해결할 수 있었습니다. Date()를 사용하는 방법을 확실하게 연습해 볼 수 있는 챌린지였습니다