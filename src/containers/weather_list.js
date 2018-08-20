import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'


class WeatherList extends Component{


  renderWeather = (cityData) => {
    console.log(cityData)
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp) // go back and write a function to change this to fahrenheit (currently using Kelvin)
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)


    function fahrenheit(temps){
      let f = 0
      let ftemps = []
          temps.map(i =>{
          f = (i * 9/5) - 459.67
          ftemps.push(Math.round(f))
          })
      return ftemps
    }

    return(
      <tr key={name}>
        <td>{name}</td>
        <td>Current Weather data coming soon</td>
        <td><Chart data={fahrenheit(temps)} color="green" units="F"/></td>
        <td><Chart data={pressures} color="orange" units="hPa"/></td>
        <td><Chart data={humidities} color="red" units="%"/></td>
      </tr>
    )
  }

  render(){
    return(
      <table className= "table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Current Weather</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
        {console.log("FORECAST",this.props.weather.forecastArray.city)}
        
        {this.props.weather.forecastArray.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }

}

function mapStateToProps(state){
    console.log("I AM STATE",state)
  return {
    weather: state.weather

  }
}

export default connect(mapStateToProps)(WeatherList)
