
const ApiKey = "c46c633ef3e8ab3f4b443f7000f9db8a"


function getweather(event){
    event.stopPropagation();
    event.preventDefault();
    
  // call the class input city
    doAPICall(document.getElementsByClassName("form-control")[0]. value)


}

async function doAPICall(city){
    let result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`)

    let images = document.createElement("img")
    images.src = "images/k.jpg";
    images.style.height = "390px"
    images.style.width = "420px"
    document.body.appendChild(images);
    
    let header = document.getElementsByClassName('card-title')[0];
    header.innerText=result.data.name;

    // assign the text to the HTML for h4 
    document.getElementById("hightemp").innerText="High" ;
    // display the temp data from the API
    let high = document.getElementsByClassName("card-title1")[0];
    high.innerText=Math.round(result.data.main.temp_max) + '\u00B0F' ;

    // assign the text to the HTML for grab the ID
    document.getElementById("lowtemp").innerText="Low";
       // display the temp data from the API
    let low = document.getElementsByClassName("card-title2")[0];
    low.innerText=Math.round(result.data.main.temp_min) + '\u00B0F';

      // assign the text to the HTML for grab the ID
    document.getElementById("forcasttemp").innerText="Forecast";
       // display the temp data from the API
    let forecast = document.getElementsByClassName("card-title3")[0];
    forecast.innerText=result.data.weather[0].description;

      // assign the text to the HTML for grab the ID
    document.getElementById("humiditytemp").innerText="Humidity";
       // display the temp data from the API
    let humidity = document.getElementsByClassName("card-title4")[0];
    humidity.innerText=result.data.main.humidity + '%';
}