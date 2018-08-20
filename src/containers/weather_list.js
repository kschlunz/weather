import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'


class WeatherList extends Component{


  renderWeather = () => {
    if(this.props.weather.forecastArray){
      console.log("hi people")
      console.log(this.props.weather.forecastArray)
    }



    return(
      <tr >
        <td>WHO DIS</td>
        <td>Current Weather data coming soon</td>
        <td>I am something</td>
        <td>rewrite it all</td>
        <td>some numbers</td>
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
        {this.renderWeather()}

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
