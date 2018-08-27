import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators, compose, createStore, applyMiddleware } from 'redux';
import { hikingTrails } from '../actions/api'

class HikingTrails extends Component {

  renderTrails = () => {
    console.log("TRAILS", this.props.trails.trails)
    if(this.props.trails.trails){
      const trail= this.props.trails.trails.map(t => t.name)
      const trailName = trail.map(name => name)
      const trailPic = this.props.trails.trails.map(t => t.imgMedium)
      const pictures = trailPic.map(pic => pic)

      console.log(pictures)
      console.log(trailName)


      return(
          // <img className="card-img-top" src= {`${pictures}`}></img>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{trailName}</h5>
              <p className="card-text">Some info</p>
          </div>
        </div>

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
