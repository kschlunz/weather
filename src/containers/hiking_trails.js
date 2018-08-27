import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators, compose, createStore, applyMiddleware } from 'redux';
import { hikingTrails } from '../actions/api'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


class HikingTrails extends Component {

  renderTrails = () => {
    console.log("TRAILS", this.props.trails.trails)
    if(this.props.trails.trails){
      const trail= this.props.trails.trails.map(t => {
        return(
          <div className="card" style={{width: 18 + 'rem' }}>
          <img className="card-img-top" src={t.imgMedium ? ( t.imgMedium ) : ("http://appalachiantrail.org/images/default-source/default-album/trailfocus.jpg?sfvrsn=2")} />
          <div className="card-body">
    <h1 className="card-title">{t.name}</h1>
    <p className="card-text">{t.conditionDetails}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Cras justo odio</li>
    <li className="list-group-item">Dapibus ac facilisis in</li>
    <li className="list-group-item">Vestibulum at eros</li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>

        )
      })





      return(
        <div>
          {trail}
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
