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
        
          <div className = "card-group">
            <div className="card" style={{width: 50 + 'rem' }}>
              <img className="card-img-top" src={t.imgMedium ? ( t.imgMedium ) : ("http://appalachiantrail.org/images/default-source/default-album/trailfocus.jpg?sfvrsn=2")} />
                <div className="card-body">
                  <h1 className="card-title">{t.name}</h1>
                    <h2 className="card-text">{t.location} </h2>
                      <h3 className="card-text">Difficulty: {t.difficulty} </h3>
                        <h5 className="card-text">{t.summary} </h5>
                        </div>
              <ul className="list-group list-group-flush">
              <li className="list-group-item">Length: {t.length} miles</li>
              <li className="list-group-item">Ascent: {t.ascent} ft, Descent: {t.descent} ft</li>
              <li className="list-group-item">Conditions: {t.conditionStatus}, {t.conditionDetails} </li>
              <li className="list-group-item">High: {t.high} ft, Low: {t.low}</li>
              <li className="list-group-item">Stars: {t.stars}</li>
              </ul>

        <div className="card-body">
        <a href={t.url} target="_blank" rel="noopener noreferrer" className="card-link">Trail Information</a>
        </div>

    </div>

</div>



        )
      })





      return(
        <div>
        <div>
          <div>
          {trail}
        </div>
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
