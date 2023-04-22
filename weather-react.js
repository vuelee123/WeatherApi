// Open Weather API Assignment

const apiKey = {
    key: "bb357bca6a983688f4f645b7193c5d5e",
    url: "https://api.openweathermap.org/data/2.5/weather?lat=%7Blat%7D&lon=%7Blon%7D&appid=%7B{API key}"
}

function getWeather() {
    const zipcode = document.getElementById("zipcode").value;
    const url = "https://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + "&appid=bb357bca6a983688f4f645b7193c5d5e&units=imperial";
    

    const weather = new XMLHttpRequest();
    weather.open("GET", url);
    weather.onload = function() {
      if (weather.status === 200) {
    
        const response = JSON.parse(weather.responseText);

         const currentDate = new Date();
         document.getElementById("currentDate").innerHTML = currentDate.toLocaleDateString();
        
        document.getElementById("cityName").innerHTML = response.name;
        
        const currentTemp = response.main.temp.toFixed(0);
        document.getElementById("currentTemp").innerHTML = currentTemp + "&deg;F";
        
        const currentConditions = response.weather[0].description;
        document.getElementById("currentConditions").innerHTML = currentConditions;
        
        const tempHigh = response.main.temp_max.toFixed(0);
        const tempLow = response.main.temp_min.toFixed(0);
        document.getElementById("tempHighLow").innerHTML = "High: " + tempHigh  + "&deg;F /  " + "Low: " + tempLow + "&deg;F";
      }
    };
    weather.send();
  }