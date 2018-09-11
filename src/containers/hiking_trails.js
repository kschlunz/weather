import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose, createStore, applyMiddleware } from 'redux';
import { hikingTrails } from '../actions/api';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button } from 'reactstrap';
import HikingFilter from '../components/hiking_filter';



class HikingTrails extends Component {

  renderTrails = () => {
    console.log("TRAILS", this.props.trails.trails)
    if(this.props.trails.trails){
      const trail= this.props.trails.trails.map(t => {
        return(
            <div className="card" style={{width: 30 + 'rem' }}>
              <img className="card-img-top" src={t.imgSqSmall ? ( t.imgSqSmall) : ("http://appalachiantrail.org/images/default-source/default-album/trailfocus.jpg?sfvrsn=2")} />
                <div className="card-body">
                  <h1 className="card-title">{t.name}</h1>
                    <h2 className="card-text">{t.location} </h2>
                      <h4 className="card-text">{t.summary} </h4>

              <ul className="list-group list-group-flush">
              <li className="list-group-item">Difficulty: {t.difficulty}</li>
              <li className="list-group-item">Length: {t.length} miles</li>
              <li className="list-group-item">Ascent: {t.ascent} ft, Descent: {t.descent} ft</li>
              <li className="list-group-item">Conditions: {t.conditionStatus}, {t.conditionDetails} </li>
              <li className="list-group-item">High: {t.high} ft, Low: {t.low}</li>
              <li className="list-group-item">Stars: {t.stars}</li>
              <li className="list-group-item"><a href={t.url} target="_blank" rel="noopener noreferrer" className="card-link">Trail Information</a></li>
              </ul>
              </div>
          </div>
        )
      })
      return(
        <div className = "row">
          {trail}
        </div>
      )
    }
  }

  renderFilter = () => {
    if(this.props.trails.trails){
      return(
          <h1><HikingFilter data = {this.props.trails.trails} title= "Difficulty" options= {["green", "greenBlue", "blue", "blueBlack", "black"]} /></h1>
      )
    }
  }

    render(){
      return (
        <Fragment>
          <div>
            {this.renderFilter()}
          </div>
          <div>
            {this.renderTrails()}
          </div>
        </Fragment>

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
