let weather = {
    apikey:"56913a4395f5e44006c05d4d95428ee0",
    fetchWeather: function (city) {

        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        +city
        +"&units=metric&appid="
        +this.apikey
        ).then((response)=>response.json())
        .then((data)=>this.displayweather(data));
    },
    displayweather:function (data){
        const {name} =data;
        const {icon,description}= data.weather[0];
        const {temp,humidity,temp_min,temp_max,sunrise,sunset}= data.main;
        const {speed}= data.wind;
        console.log(name,icon,description,temp,humidity,temp_max,temp_min,speed,sunrise,sunset);
        document.querySelector(".city").innerText = "Weather in " + name + " today";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".sunrise").innerText = "Sunrise: " + sunrise + "T";
        document.querySelector(".sunset").innerText = "Sunset: " + sunset + "T";
        document.querySelector(".maxtemp").innerText = "Max Temp: " + temp_max + "°C";
        document.querySelector(".mintemp").innerText = "Min Temp: " + temp_min + "°C";
        document.querySelector(".humidity").innerText = "Humidity : " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
        document.querySelector(".currentweather").classList.remove("loading");    
    },
    search: function () {
        this.fetchWeather(document.querySelector(".searchBar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function ()
{ 
    weather.search(); 
});
document.querySelector(".searchBar").addEventListener("keyup", function (event) 
{
    if (event.key == "Enter") { weather.search() }
})
weather.fetchWeather('cape town')