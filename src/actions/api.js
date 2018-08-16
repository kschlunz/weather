const API_KEY = '4714f6f17f5c1c7e43c61476c511d581'
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(){
  return {
    type: FETCH_WEATHER
  };
}
