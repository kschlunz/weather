import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'


class WeatherList extends Component{


  renderWeather = (cityData) => {
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
        <td><Chart data={fahrenheit(temps)} color="green"/></td>
        <td><Chart data={pressures} color="orange"/></td>
        <td><Chart data={humidities} color="red"/></td>
      </tr>
    )
  }

  render(){
    return(
      <table className= "table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hP)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }

}

function mapStateToProps(state){

  return { weather: state.weather }
}

export default connect(mapStateToProps)(WeatherList)
