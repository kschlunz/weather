import React, { Component } from 'react'
import { connect } from 'react-redux';

class HikingTrails extends Component {

  componentDidMount(){

  }

    render(){
      return <div /> //refer to this def by this.ref.map
    }

}

function mapStateToProps(state){
    console.log("I AM STATE",state)
  return {
    weather: state.weather

  }
}

export default connect(mapStateToProps)(HikingTrails)
