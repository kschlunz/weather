import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose, createStore, applyMiddleware } from 'redux';
import { fetchWeather, currentWeather, hikingTrails, beerPlaces } from '../actions/api'


class SearchBar extends Component{
  state = {
    term: ''
  }


  onInputChange = (event) => {
    this.setState({
        term: event.target.value
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault()
      this.props.fetchWeather(this.state.term);
      this.props.currentWeather(this.state.term)
      this.props.beerPlaces(this.state.term)
      this.setState({term: ''})
  }

  renderTrails = () => {
    console.log("im from the renderTrails", this.props.weather.coord)
    if(this.props.weather.coord){
      this.props.hikingTrails(this.props.weather.coord)
    }else{
      <h1>Search for a city!</h1>
    }

  }

  render(){

    return(
      <form onSubmit={this.onFormSubmit}className="input-group">
        <input
          placeholder = "Search for your favorite city"
          className = "form-control"
          value = {this.state.term}
          onChange={this.onInputChange}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
          {this.renderTrails()}
      </form>

    )
  }
}

function mapStateToProps(state){
  console.log("im from mapStateToProps", state.weather.currentArray)
  return {
    weather: state.weather.currentArray

  }
}

 const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchWeather,
    currentWeather,
    hikingTrails,
    beerPlaces
  },
  dispatch,
)


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
