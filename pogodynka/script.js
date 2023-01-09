const body = document.getElementById("city");
const input = document.getElementById("input");
const cityList = document.getElementById("cities");
const ls = document.getElementById("ls");
const apikey = "dc41b297ac440a3c403fe307ed3162e6";
let cities = JSON.parse(localStorage.getItem("cities")) ||[];

async function getData(city) {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${apikey}&units=metric&q=${city}`);
  const data = await res.json();
  const { main, name, weather } = data;
  const { temp, humidity } = main;
  const description = weather[0].description
  const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  addCity(name,description, temp, humidity, icon);
}

function addCity(name,description, temp, humidity, icon) {
  const div = document.createElement("div");
  div.innerHTML = 
    `<div class="name">${name}</div>
    <div class="temp">${temp}&deg;C</div>
    <div class="humidity">${humidity}%</div>
    <div class="description">${description}</div>
    <img class="weather-icon" src="${icon}" alt="Weather icon" />
    <button class="weather-btn">&times;</button>`;

  div.querySelector(".weather-btn").addEventListener("click", e => {
    e.stopPropagation();
    deleteCity(div);
  });
  cityList.appendChild(div);
  addCityToLocalStorage(name,description, temp, humidity, icon);
}

function deleteCity(div) {
  cityList.removeChild(div);
  cities = cities.filter(city => city.name !== div.firstChild.textContent);
  localStorage.setItem("cities", JSON.stringify(cities));
}

function addCityToLocalStorage(name,description, temp, humidity, icon){
  const existingCity = cities.find(city => city.name === name);
  if (!existingCity) {
    if (cities.length < 10) {
      cities.push({ name,description, temp, humidity, icon });
    } else {
      cities.shift();
      cities.push({ name,description, temp, humidity, icon });
    }
  }
  localStorage.setItem("cities", JSON.stringify(cities));
}

function addBtn(e) {
  e.preventDefault();
  const city = input.value;
  getData(city);
  input.value = "";
}

function readLocalStorage(){
  if (cities.length > 0) {
    cities = cities.slice(cities.length - 10);
    cities.forEach(city => {
      const { name,description,  temp, humidity, icon } = city;
      addCity(name,description , temp, humidity, icon);
    });
  }
}

body.addEventListener("submit", addBtn);
document.getElementById("clear").addEventListener("click", e => {
  localStorage.clear();
});

readLocalStorage();
