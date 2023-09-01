const apiKey = 'IAcHt1KeaLSZGkMC2sXVsDc1H3wzXMOP';
const apiUrl = 'https://api.tomorrow.io/v4/weather/realtime?';
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

window.onload=function(){
          document.querySelector('.city').innerHTML = "";
          document.querySelector('.temp').innerHTML = "";
          document.querySelector('.humid-value').innerHTML = "";
          document.querySelector('.wind-speed').innerHTML="";
}

async function weatherUpdate(city){
     {
        try {
        //   const options = { method: 'GET', headers: { accept: 'application/json' } };
        //const options = {method: 'GET', headers: {accept: 'application/json'}};

          //const apiUrl = `https://api.tomorrow.io/v4/weather/realtime?location=${encodeURIComponent(city)}&apikey=IAcHt1KeaLSZGkMC2sXVsDc1H3wzXMOP`;
      
          const response = await fetch('https://api.tomorrow.io/v4/weather/realtime?location='+city+'&apikey=IAcHt1KeaLSZGkMC2sXVsDc1H3wzXMOP');

          const data = await response.json();
          console.log(data);
          // Extract temperature and humidity from the JSON data
          const temperature = data.data.values.temperature;
          const humidity = data.data.values.humidity;
          
          const cityName = getCityName(data.location.name);
          function getCityName(locationName) {
            
              const arr = locationName.split(',');
              const cityNameFinal = arr[0]+', '+arr[arr.length-1];  
              return cityNameFinal;
        
          }
          const windSpeed=data.data.values.windSpeed;
      
          // Display the extracted values
          console.log('Temperature:', temperature);
          console.log('Humidity:', humidity);
          console.log('City:', cityName);
      
          // Update HTML elements with the extracted values
          document.querySelector('.city').innerHTML = cityName;
          document.querySelector('.temp').innerHTML = temperature + ' °C';
          document.querySelector('.humid-value').innerHTML = humidity + ' %';
          document.querySelector('.wind-speed').innerHTML=windSpeed+ ' Km/hr';
        } catch (error) {
          // Handle any errors that occurred during the request
          console.error('Error:', error);
        }
      }
      
      // Example usage: fetch weather data for "Nagpur"
      
      
}

searchBtn.addEventListener("click",()=> {
  weatherUpdate(searchBox.value);
})



 
  
   

// }


