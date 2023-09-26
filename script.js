//define element
const inputValue = document.querySelector('.search-bar');
const btn = document.getElementById('btn');

const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const des = document.querySelector('.description');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');

const apiKey = '7e075bbe59105f2687220596e4f7b97b';

function convertion(val){
    return (val-273).toFixed(2)
}
// add eventLisetner
btn.addEventListener('click', function () {
  const cityName = inputValue.value;

  if (!cityName) {
    console.error("Please enter a city name.");
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {

    //console.log(data);
    //variable Declaration

    var cityNameVal =  data['name'];
    var temperature = data['main']['temp'];
    var descrip = data['weather'][0]['description'];
    var humidityVal = data['main']['humidity'];
    var windSpeed = data['wind']['speed'];

     city.innerHTML = `Weather of <span>${cityNameVal}</span>`
     temp.innerHTML = `<span>${convertion(temperature)}°C</span>`;  
     des.innerHTML = `Sky Conditions: <span>${descrip}</span>`;
     humidity.innerHTML = `Humidity: <span>${humidityVal}</span>`;
     wind.innerHTML = `Wind: <span>${windSpeed}</span> km/h`; 

    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

});






