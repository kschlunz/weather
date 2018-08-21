import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators, compose, createStore, applyMiddleware } from 'redux';
import { hikingTrails } from '../actions/api'

class HikingTrails extends Component {

  componentDidMount(){
    console.log("hi i am coords?",this.props.weather.currentArray.coord)
    this.props.hikingTrails()

  }



    render(){
      return <div/> //refer to this def by this.ref.map
    }

}

function mapStateToProps(state){
    console.log("I AM STATE",state)
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

export default connect(mapStateToProps, mapDispatchToProps)(HikingTrails)
