var fetchWeather = "/weather";

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

const weatherIcon = document.querySelector('.weatherIcon i');
const weatherCondition = document.querySelector('.weatherCondition');

const tempElement = document.querySelector('.temperature span');

const locationElement = document.querySelector('.place');

const dateElement = document.querySelector('.date');

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

dateElement.textContent = new Date().getDate() + ", " + monthNames[new Date().getMonth()].substring(0, 3);


weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    locationElement.textContent = "Loading...";
    tempElement.textContent = "";
    weatherCondition.textContent = "";
    const locationApi = fetchWeather + "?address=" + search.value;
    fetch(locationApi).then(response => {
        response.json().then(data => {
            if(data.error) {
                locationElement.textContent = data.error;
                tempElement.textContent = "";
                weatherCondition.textContent = "";
            }else{
                if(data.description === "clear sky"){
                    weatherIcon.className = "fa-solid fa-sun"
                }else if(data.description === "few clouds"){
                    weatherIcon.className = "fa-solid fa-cloud-sun"
                }else if(data.description === "scattered clouds"){
                    weatherIcon.className = "fa-solid fa-cloud"
                }else if(data.description === "broken clouds"){
                    weatherIcon.className = "fa-solid fa-smog"
                }else if(data.description === "shower rain"){
                    weatherIcon.className = "fa-solid fa-cloud-showers-heavy"
                }else if(data.description === "light rain"){
                    weatherIcon.className = "fa-solid fa-cloud-sun-rain"
                }else if(data.description === "thunderstorm"){
                    weatherIcon.className = "fa-solid fa-cloud-bolt"
                }else if(data.description === "snow"){
                    weatherIcon.className = "fa-solid fa-snowflake"
                }else if(data.description === "mist"){
                    weatherIcon.className = "fa-solid fa-smog"
                }else if(data.description === "overcast clouds"){
                    weatherIcon.className = "fa-solid fa-cloud"
                }
                locationElement.textContent = data.cityName;
                tempElement.textContent = data.temperature + String.fromCharCode(176);
                weatherCondition.textContent = data.description.toUpperCase();
            }
        }) 
    })
})