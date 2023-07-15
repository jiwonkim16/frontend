const API_KEY = "88278ebbb338370143d75083fc5ecbfe"  

function onGeoOk(position){
    const lat = position.coords.latitude
    const lon = position.coords.longitude

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    // openweathermap.org라고 하는 weather API
    // 여러 API 방식 중에 좌표를 입력할 수 있는 URL을 가져옴

    fetch(url).then(response.json()).then(data =>{  //url로 요청을 보내서 data라는 값을 얻어옴
        // fetch는 promise임 promise는 당장 무언가 일어나지 않고 시간이 조금 걸린 뒤에 일어나는 것
        // 그래서 기다리지 않기 위해서 then을 사용함. 다음으로 response를 받아야 함 그리고 respose의 json을 얻어야 함.
        // 그리고 내용을 추출했으면 data를 얻음.
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name
        weather.innerText = `${data.weather[0].main } / ${ data.main.temp}`;  // `${}` 이 템플릿 리터럴이 백틱 안의 내용을 string 으로 만들어줌.
    })
}  // 템플릿 리터럴(template literal)은 문자열을 더욱 편리하게 처리할 수 있는 새로운 형식의 문자열 표현법. 
   // 템플릿 리터럴의 주요 기능은 문자열 내에 표현식을 삽입할 수 있다는 것.  이를 통해 문자열을 간편하게 조합하고, 복잡한 문자열 작업을 줄일 수 있음.

function onGeoError(){
    alert("Can't find you. No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError) // 이 navigator 함수는 사용자의 위치(geolocation)을 알려줌. 
// getCurrentPosition()은 2개의 인자를 필요로 하는데 1. 모든게 잘 됬을때 실행될 함수  2. 에러가 났을 때 실행될 함수
// 또 getCurrentPosition()함수는 성공했을 때 GeolocationPositison object를 준다고 되어 있음.
// GeolocationPositison object를 살펴보면 coords(좌표값)을 확인할 수 있고 그 안에 위도, 경도 값도 확인할 수 있음.