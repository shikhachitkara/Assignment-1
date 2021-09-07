const weatherApi = {
    key: "bab281d79e5f1e9755a68d754cc313e7",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather", 
}

const searchInputBox = document.getElementById('input-box');

// Event Listener Function on keypress
searchInputBox.addEventListener('keypress', (event) => {
    
    if(event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }

});

// Get Weather Report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

// Show Weather Report
function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    
    if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKjiC6wUU2pToB2BlUFP9gbp2IIG3e0nxhrQ&usqp=CAU')";
        
    } else if(weatherType.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLIFTKKhges-QkcFgCizD_c2Kbp7KyYIOxyw&usqp=CAU')";
        
    } else if(weatherType.textContent == 'Haze') {

        document.body.style.backgroundImage = "url('https://st2.depositphotos.com/2373719/6868/i/600/depositphotos_68684361-stock-photo-beautiful-foggy-field.jpg')";
        
    }     else if(weatherType.textContent == 'Rain') {
        
        document.body.style.backgroundImage = "url('https://i.ytimg.com/vi/3wFvFvVZkwY/maxresdefault.jpg')";
        
    } else if(weatherType.textContent == 'Snow') {
        
        document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCo2ukYDWcKJ8BsbdpwLs_aaz7QBf2b_lsjg&usqp=CAU')";
    
    } else if(weatherType.textContent == 'Thunderstorm') {
    
        document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx-1uIBXCho-XY_zOAqxUY_k-g9jXsIcpn9w&usqp=CAU')";
        
    } 
}

// Date manage
function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}

