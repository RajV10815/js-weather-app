const city = document.getElementById('city')
const api_key = 'ff56afd94f41b160afeeb433f480e1fd';
const result = document.getElementById('result')
async function getWeather() {

try{

  result.innerHTML = ''
  const call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${api_key}`);
  const data = await call.json()
  result.innerHTML = `
        <h1>City : ${data.name}</h1>
        <h3>Humidity : ${data.main.humidity}</h3>
        <h3>Pressure : ${data.main.pressure}</h3>
        <h3>Sea level :${data.main.sea_level}</h3>
        <h3>Temp : ${data.main.temp}</h3>
  `

}catch(err){
  result.innerHTML = ''
  result.innerHTML = `<h2>City not found</h2>`
  }
}
const button = document.querySelector('.btn')
const app = document.querySelector('.app')
function click(){
  app.addEventListener('keydown' , (e) => {
    if(e.key === 'Enter'){
      button.click()
    }
  })
}
click();