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