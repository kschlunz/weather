import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators, compose, createStore, applyMiddleware } from 'redux';
import { hikingTrails } from '../actions/api'

class HikingTrails extends Component {


  // componentDidMount(){
  //   console.log("I NOW WORK!!!",this.props.data.coord)
  //   this.props.hikingTrails(this.props.data.coord)
  //
  // }

  renderTrails = () => {
    console.log("TRAILS", this.props.trails.trails)
    if(this.props.trails.trails){
      const trail= this.props.trails.trails.map(t => t.name)
      const trailName = trail.map(name => name)
      console.log(trailName)
      return(
        <h1>{trailName}</h1>
      )

    }

  }


    render(){
      return (
        <div>
          {this.renderTrails()}
        </div>
      )
    }

}

function mapStateToProps(state){
    console.log(state.weather.trailsArray)
  return {
    trails: state.weather.trailsArray
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
 {
   hikingTrails
 },
 dispatch,
)

export default connect(mapStateToProps, mapDispatchToProps)(HikingTrails)
