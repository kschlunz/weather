import React from 'react';
import { Component } from 'react';

export default class WeatherList extends Component{
  render(){
    return(
      <table className= "table table-hover">
        <thead>
          <tr>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    )
  }

}
