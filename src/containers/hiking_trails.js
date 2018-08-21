import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators, compose, createStore, applyMiddleware } from 'redux';
import { hikingTrails } from '../actions/api'

class HikingTrails extends Component {


  componentDidMount(){
    console.log(this.props.data.currentArray)
    this.props.hikingTrails()

  }
    render(){
      return (
        <div>
        </div>
      ) 
    }

}



const mapDispatchToProps = dispatch => bindActionCreators(
 {
   hikingTrails
 },
 dispatch,
)

export default connect(null, mapDispatchToProps)(HikingTrails)
