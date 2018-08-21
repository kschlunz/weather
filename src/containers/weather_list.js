import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'
import HikingTrails from './hiking_trails'



class WeatherList extends Component{
  renderWeather = () => {
    if(this.props.weather.forecastArray.city && this.props.weather.currentArray.main){
      const name = this.props.weather.forecastArray.city.name
      const temps = this.props.weather.forecastArray.list.map(weather => weather.main.temp) // go back and write a function to change this to fahrenheit (currently using Kelvin)
      const pressures = this.props.weather.forecastArray.list.map(weather => weather.main.pressure)
      const humidities = this.props.weather.forecastArray.list.map(weather => weather.main.humidity)
      const currentTemp = this.props.weather.currentArray.main.temp
      const tempMax = this.props.weather.currentArray.main.temp_max
      const tempMin = this.props.weather.currentArray.main.temp_min


      function fahrenheit(temps){
        let f = 0
        let ftemps = []

        temps.map(i =>{
            f = (i * 9/5) - 459.67
            ftemps.push(Math.round(f))
          })
    return ftemps
  }

      function currentF(currentTemp){
        let f = (currentTemp * 9/5) - 459.67
        return Math.round(f)
      }

      return(
        <tr >
          <td>{name}</td>
          <td>
           Current Temperature: {currentF(currentTemp)}
           High: {currentF(tempMax)}
           Low: {currentF(tempMin)}
           Description: {this.props.weather.currentArray.weather[0] ? (
             this.props.weather.currentArray.weather[0].description ) : ("no loaded" )}
           </td>
          <td><Chart data={fahrenheit(temps)} color="green" units="F"/></td>
          <td><Chart data={pressures} color="orange" units="hPa"/></td>
          <td><Chart data={humidities} color="red" units="%"/></td>
        </tr>

      )
    }

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
        {this.renderWeather()}
        </tbody>
        <div>
          <h1><HikingTrails/>HIKING HERE</h1>
        </div>
      </table>

    )
  }

}

function mapStateToProps(state){
    
  return {
    weather: state.weather

  }
}

export default connect(mapStateToProps)(WeatherList)
