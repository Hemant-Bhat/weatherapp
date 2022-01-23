const cityName = document.querySelector('#city_name');
const getCityData = document.querySelector('#get_city_data');
const disCityName = document.querySelector('#city');
const disTemp = document.querySelector('#ct');
const disMaxTemp = document.querySelector('#maxt');
const disMinTemp = document.querySelector('#mint');
const disWeatherType = document.querySelector('#wt');
const disWeatherIcon = document.querySelector('#wc')
const disDate = document.querySelector('#date');
const disDay = document.querySelector('#day');
const disYear = document.querySelector('#year');
// const disSunrise = document.querySelector('#sunr')
// const disSunset = document.querySelector('#suns')
const apiKey = "0ffe981575f8d160a61acc25ec932ef0";
const daysName = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
const date = new Date();




function fetchData(){
    let city = cityName.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url).then(res => (res.json()))
    .then(data => displayData(data))
}

function displayData(data){
    disCityName.innerHTML = data.name + '<span id="cn">' + data.sys.country + '</span>';
    disDate.innerHTML = date.getDate();
    disDay.innerHTML = daysName[date.getDay()];
    disYear.innerHTML = date.getFullYear();
    disWeatherType.innerHTML = data.weather[0].main;
    disTemp.innerHTML = Math.round(data.main.temp) + '<span class="sub">C</span>';
    disMaxTemp.innerHTML = Math.round(data.main.temp_max) + '<span class="sub">C</span>';
    disMinTemp.innerHTML = Math.round(data.main.temp_min) + '<span class="sub">C</span>';
    const icon = data.weather[0].icon;
    const convImg = icon.slice(0,-1) + 'd';
    disWeatherIcon.src = `https://openweathermap.org/img/wn/${convImg}.png`;
    // disSunrise.innerHTML = ((((data.sys.sunrise / 1000) / 60) / 60) / 24) + ':' + (((data.sys.sunrise / 1000) / 60) / 60) / 60;
    // disSunset.innerHTML = ((((data.sys.sunset / 1000) / 60) / 60) / 24);
    // console.log(Math.floor((data.sys.sunrise / 1000) / 60) % 60);
    console.log(data);
}

getCityData.addEventListener('click', fetchData);
cityName.addEventListener('keydown', (e) => {
    if(e.keyCode === 13){
        fetchData();
    }else{
        return;
    }
});
