const API_KEY = '4714f6f17f5c1c7e43c61476c511d581'
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = "FETCH_WEATHER";
export const CURRENT_WEATHER = "CURRENT_WEATHER";
export const GET_TRAILS = "GET_TRAILS"

export const fetchWeather = (city) => (dispatch) => {

  const url =  `https://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=${API_KEY}`;

  fetch(url)
  .then(res => res.json())
  .then(weather => {

    return dispatch({
      type:FETCH_WEATHER,
      payload: weather
    })
  })
}

export const currentWeather = (city) => (dispatch) => {
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city},us&appid=${API_KEY}`;

  fetch(api)
  .then(res => res.json())
  .then(current => {


    return dispatch({
      type: CURRENT_WEATHER,
      payload: current
    })
  })
}

export const hikingTrails = (city) => (dispatch) => {
  console.log("i am lon?", city)
  
  const lon = city.lon
  const lat = city.lat
  const hikeURL = `https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lon}&maxDistance=15&maxResults=100&key=200337409-b60064688dd8999085dede640c0a7c95`

  fetch(hikeURL)
  .then(res => res.json())
  .then(hiking =>{
    console.log("iam hiking res", hiking)

    return dispatch({
      type: GET_TRAILS,
      payload: hiking
    })
  })

}


// `https://api.openweathermap.org/data/2.5/weather?q=${city},us&appid=${API_KEY}` THIS IS FOR CURRENT WEATHER TO ADD
