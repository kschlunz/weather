import React, {Component} from 'react';

export default class SearchBar extends Component{

  state = {
    term: ''
  }

  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({
        term: event.target.value 
    })
  }

  render(){
    return(
      <form className="input-group">
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
