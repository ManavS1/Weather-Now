// caecb1fb34e9053f3f76c5d81a7b83de apikey
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key};

const WeatherApi = {
  key: "caecb1fb34e9053f3f76c5d81a7b83de",
  url: "https://api.openweathermap.org/data/2.5/weather",
};

//Default data
let dateFormat = Date().split(" ");
date.textContent = `${dateFormat[0]} ${dateFormat[1]}, ${dateFormat[3]}`;

const inputBox = document.getElementById("input-box");

inputBox.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    console.log(inputBox.value);
    getReport(inputBox.value);
  }
});

function getReport(city) {
  fetch(`${WeatherApi.url}?q=${city}&appid=${WeatherApi.key}&units=metric`)
    .then((weather) => {
      return weather.json(showReport);
    })
    .then(showReport);
}

function showReport(weather) {
  console.log(weather);
  let body = document.body;
  let date = document.getElementById("date");
  let city = document.getElementById("city");
  let temp = document.getElementById("temp");
  let weatherStatus = document.getElementById("weather");

  // showing city and country name in app
  city.textContent = `${weather.name}, ${weather.sys.country}`;

  // converting date result into array and showing to the user
  let dateFormat = Date().split(" ");
  date.textContent = `${dateFormat[0]} ${dateFormat[1]}, ${dateFormat[3]}`;

  //showing temprecher in app
  let temprecher = Math.floor(weather.main.temp);
  temp.textContent = `${temprecher}°C`;

  //showing weather status in app
  weatherStatus.textContent = `${weather.weather[0].main}`;

  //deciding background image according to weather status
  if (weather.weather[0].main == "Clouds") {
    body.style.backgroundImage = "url('img/clouds.jpg')";
  } else if (weather.weather[0].main == "Haze") {
    body.style.backgroundImage = "url('img/foggy-haze.jpg')";
  } else if (weather.weather[0].main == "Thunderstorm") {
    body.style.backgroundImage = "url('img/thunderstorm.jpg')";
  } else if (weather.weather[0].main == "Mist") {
    body.style.backgroundImage = "url('img/mist.jpg')";
  } else if (weather.weather[0].main == "Rain") {
    body.style.backgroundImage = "url('img/rain.jpg')";
  } else if (weather.weather[0].main == "Clear") {
    body.style.backgroundImage = "url('img/clear.jpg')";
  } else if (weather.weather[0].main == "Smoke") {
    body.style.backgroundImage = "url('img/foggy-haze.jpg')";
  } else {
    body.style.backgroundImage = "url('img/clear.jpg')";
  }

  //   console.log(dateFormat);
  // clearing value of text input entered by user
  inputBox.value = "";
}
