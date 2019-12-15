var search=document.getElementById("search");
search.addEventListener("keyup",(e)=>
{
    if(e.keyCode===13)  // since enter key in keyboard value is  13 
    {

        // e.preventDefault();
       var getCityName=e.target.value;
    }
    getWeather(getCityName);
});
function getWeather(getCityName)
{
    const weatherApi=`http://api.openweathermap.org/data/2.5/weather?q=${getCityName}&&node=json&units=metric&APPID=9b18fbf9393dcd79adc0a4a961d023a8`;
// console.log(getCityName)
window.fetch(weatherApi)
.then(data=>
    {
        data.json().then(weather=>
            {
                var output= "";
                console.log(weather);
                // console.log(weather.coord.lon);
                // console.log(weather.coord.lat);
                //array here
 var weatherData=weather.weather;
for(let x of weatherData)
{
    output+= `
    <div class= "col-md-4 offset-4 mt-4 card">
    <div class="card-body">
    <h1>${weather.name}</h1>
    <span class ="icon"> <img src="http://openweathermap.org/img/wn/${x.icon}.png"></span>
    <p><span>temp:</span>
    <spna class="temp">${weather.main.temp}&deg;c</span></p>
    <span class="des float-left">${x.description}</spna>
    <span class="des float-right">${x.main}</spna>
    </div>
    </div>
    `;
    document.getElementById("template").innerHTML=output;
//    console.log(x);
//     console.log(x.id)
//     console.log(x.main)
//     console.log(x.description)
//     console.log(x.icon)
}
            })
            .catch(err=>console.log(err))
    })
    .catch(err=>console.log(err));




}