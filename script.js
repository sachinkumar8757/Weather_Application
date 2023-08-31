const inputBox = document.querySelector('.input-box');
//const searchBtn = document.querySelector('.searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');

async function checkWeather(city){
 const api_key="20f77486ef5c4e90f7561ac942e1e6e1";
 const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

 const weather_data =await fetch(`${url}`).then(response =>
    response.json());

   // console.log (weather_data);
   if(weather_data.cod === `404`){
    location_not_found.style.display = "flex";
    weather_body.style.display = none;
    console.log("error");
    return;
   }
   location_not_found.style.display = "none";
   weather_body.style.display = "flex";

   temperature.innerHTML =`${Math.round(weather_data.main.temp - 273.15)}°C`;

   description.innerHTML = `${weather_data.weather[0].description}`;

   humidity.innerHTML =`${weather_data.main.humidity}%`;

   wind_speed.innerHTML = `${weather_data.wind.speed}km/H`;

   switch(weather_data.weather[0].main){
    case 'Cloud':
        weather_img.src ="/assets/cloud (1).png";
        break;
    case 'Clear':
        weather_img.src ="/assets/clear.png";
        break;
    case 'Rain':
        weather_img.src ="/assets/rain.png";
        break;
    case 'Mist':
        weather_img.src ="/assets/mist.png";
        break;  
    default:
        weather_img.src ="/assets/cloud (1).png";   
        break; 
   }

}
// searchBtn.addEventListener('click', () => {
//     checkWeather(inputBox.value);
// });

const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', function() {
    //console.log('Button clicked!');
    checkWeather(inputBox.value);
});
