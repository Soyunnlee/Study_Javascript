
const API_KEY = '160d89b34edbb491a986e42383086c43'

const printweather = document.querySelector("#weather span:nth-child(1)")
console.log(printweather)


  function fetchweather(){
    const lat = '37.4989073'
    const lon = '126.9214082'

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            const myposition = data.name
            const weather = data.weather[0].main
            const span = document.createElement("span");

            printweather.appendChild(span);
            span.innerText =`내 위치는 ${myposition} 이고, 날씨는 ${weather} 이다.`
     
        }); 
}

fetchweather()