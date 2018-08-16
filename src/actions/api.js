const API_KEY = '4714f6f17f5c1c7e43c61476c511d581'
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
const url = `${ROOT_URL}&q=${city},us`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export const fetchWeather = (city) => (dispatch) => {
  fetch(url)
  .then(res => res.json())
  .then(weather => {
    console.log(weather)

    return dispatch({
      type:FETCH_WEATHER,
      payload: weatherre
    })
  })
}
