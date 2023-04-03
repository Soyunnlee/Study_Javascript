

const API_KEY = "160d89b34edbb491a986e42383086c43"



// const toDoForm = document.getElementById("todo-form")


// 브라우저에서 위 좌를 준다. (witi, 위치 gps )
// getCurrentPosition 은 인자가 2개 필요하다.
// 하나는 모든게 잘 됐을때 실행 될 함수고 , 하나는 에러가 났을때 처리될 함수다.
// navigator.geolocation.getCurrentPosition() 

//navigator.geolocation.getCurrentPosition 이 성공했을때 필요한 함수.
// navigator.geolocation.getCurrentPosition 이 위치 정보에 대한 object 를 준다.
// position 이라는 인자에 object 를 받아서 쓰겠다는 뜻.
function onGeoOk(position){
    const lat = position.coords.latitude
    const lon = position.coords.longitude

    // {API_KEY} 뒤에 &units=metric 을 붙여줘서 url 로 얻는값을 다르게 바꾸어주었다.
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

    // fetch 는 promise 다. promise 는 당장 뭔가 일어나지 않고 시간이 좀 걸린뒤에 일어나는 것이다.
    // response 는 json으로 받아와야 한다.  
    fetch(url)
        .then(response => response.json())
        .then((data) => {   
            const city  = document.querySelector("#weather span:first-child")
            const weather  = document.querySelector("#weather span:last-child")
            city.innerText = data.name;
            weather.innerText = data.weather[0].main;
            console.log(data.name)
        });
}

function onGeoError(){
    alert("Can't find you. No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)