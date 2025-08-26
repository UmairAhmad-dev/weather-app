function getWeather(){
    let city = document.getElementById("city").value;
    let result = document.getElementById("result");

    if(city===""){
        result.innerHTML = "Please enter a valid city name";
        return;
    } 
    let apiKey="e0b97924adc5ca5ff587e11f2f3430c5";
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)
    .then(Response => Response.json())
    .then(data => {
        if( data.cod === "404"){
            result.innerHTML="City Not Found";
        } else{
            result.innerHTML= `
             <h3>${data.name}, ${data.sys.country}</h3>
          🌡 Temp: ${data.main.temp} °C <br>
          🌥 Weather: ${data.weather[0].main}
          
        `;
        }
    })
    .catch(error => {
        result.innerHTML="Error in fetching Data";
    })
}
    function clearResult(){
        document.getElementById("city").value="";
        document.getElementById("result").innerHTML="";
    }
