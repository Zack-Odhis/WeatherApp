
const apiKey = "c129718c575756c438f22b7f139f94d7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

 const searchBox = document.querySelector(".search input");
 const searchBtn = document.querySelector(".search button");
 const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {


    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status== 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " Km/h";

     switch (data.weather[0].main) {
        case "Clear": weatherIcon.src="./images/clear2.png"; break;
        case "Clouds": weatherIcon.src="./images/cloudy.png"; break;
        case "Rain": weatherIcon.src="./images/rain.webp"; break;
        case "Drizzle": weatherIcon.src="./images/rain.webp"; break;
        case "Thunderstorm": weatherIcon.src="./images/rain.webp"; break;
        case "Snow": weatherIcon.src="./images/snow.png"; break;
        case "Mist": 
        case "Smoke": 
        case "Haze":
        case "Fog": 
        case "Dust": 
        case "Sand": 
        case "Ash": weatherIcon.src="./images/mist.png"; break;
        case "Squall": weatherIcon.src="./images/wind.png"; break;
        case "Tornado": weatherIcon.src="./images/tornado.png"; break;
            
        default: weatherIcon.src="./images/clear.png"; break;
     }

     document.querySelector(".error").style.display = "none";
     document.querySelector(".weather").style.display = "block";
    }
}

 searchBtn.addEventListener("click", ()=>{
     checkWeather(searchBox.value);
 })


    