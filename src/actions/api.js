const API_KEY = '4714f6f17f5c1c7e43c61476c511d581'
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = "FETCH_WEATHER";
export const CURRENT_WEATHER = "CURRENT_WEATHER";

export const fetchWeather = (city) => (dispatch) => {

  const url =  `https://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=${API_KEY}`;

  fetch(url)
  .then(res => res.json())
  .then(weather => {
    console.log(weather)

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
    console.log(current)

    return dispatch({
      type: CURRENT_WEATHER,
      payload: current
    })
  })
}


// `https://api.openweathermap.org/data/2.5/weather?q=${city},us&appid=${API_KEY}` THIS IS FOR CURRENT WEATHER TO ADD
