import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose, createStore, applyMiddleware } from 'redux';
import { fetchWeather, currentWeather } from '../actions/api'


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
      this.setState({term: ''})
  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit}className="input-group">
        <input
          placeholder = "Get a five-day forecast in your favorite cities"
          className = "form-control"
          value = {this.state.term}
          onChange={this.onInputChange}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
      </form>
    )
  }
}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({ fetchWeather }, dispatch)
// }

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators()
//     fetchWeather: (newPlace) => {
//       dispatch(fetchWeather(newPlace))
//
//   }
//
// }
 // const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchWeather },dispatch)

 const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchWeather,
    currentWeather
  },
  dispatch,
)


export default connect(null, mapDispatchToProps)(SearchBar);
