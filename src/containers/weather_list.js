import React from 'react';
import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'
import HikingTrails from './hiking_trails'
import { bindActionCreators, compose, createStore, applyMiddleware } from 'redux';
import { hikingTrails } from '../actions/api'
import Beer from '../components/beer'
import { Container, Row, Col } from 'reactstrap';
import Grid from 'react-css-grid'




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
          <td className = "tableFont">{name}</td>
          <td className = "currTemp">
           Current Temperature:  {currentF(currentTemp)}
           <br></br>
           High:  {currentF(tempMax)}
           <br></br>
           Low:  {currentF(tempMin)}
           <br></br>
           Description:  {this.props.weather.currentArray.weather[0] ? (
             this.props.weather.currentArray.weather[0].description ) : ("no loaded" )}
           </td>
          <td><Chart data={fahrenheit(temps)} color="green" units="F"/></td>
          <td><Chart data={pressures} color="orange" units="hPa"/></td>
          <td><Chart data={humidities} color="red" units="%"/></td>
      </tr>

      )
    }

  }

  renderHiking = () => {
    if(this.props.weather.currentArray.main){
      return(
        <h1><HikingTrails data = {this.props.weather.currentArray}/></h1>
      )

    }
  }

  renderBeer = () => {
    if(this.props.weather){
      return(
        <h1><Beer data = {this.props.weather.beerArray}></Beer></h1>
      )

    }
  }

  render(){
    return(
      <Fragment>
      <table className= "table table-hover">
        <thead>
          <tr>
            <th className = "titleFont">City</th>
            <th>Current Weather</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
        {this.renderWeather()}
        </tbody>
        </table>
          <div className = "trailComponent">
          {this.renderHiking()}
        </div>
          <div className = "breweryComponent">

            
            {this.renderBeer()}
          </div>
      </Fragment>

    )
  }

}

function mapStateToProps(state){

  return {
    weather: state.weather

  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
 {
   hikingTrails
 },
 dispatch,
)

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList)
