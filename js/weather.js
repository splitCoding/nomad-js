const apiKey = "2883b045d229cb83e47337049efbf0d5";

function geoSuccess(position){
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  console.log(lat, lon, url);
  fetch(url).then(res =>{ return res.json()}).then(data => {
    const container = document.querySelector('.weather');
    const city = document.createElement('span');
    city.innerText = `${data.name} / `;
    const weather = document.createElement('span');
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    container.append(city);
    container.append(weather);
  });
}
function geoErr(err){
  console.log(err)
}
navigator.geolocation.getCurrentPosition(geoSuccess,geoErr);