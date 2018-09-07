import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
class HikingFilter extends Component{

  state = {
    listOpen: false,
    headerTitle: this.props.title
  }

  handleClickOutside(){
  this.setState({
    listOpen: false
  })
}
toggleList(){
  this.setState(prevState => ({
    listOpen: !prevState.listOpen
  }))
}
render(){
  const{list} = this.props.data
  const{listOpen, headerTitle} = this.state
  return(

    <div className="dd-wrapper">
      <h1>Hi am i your drop down </h1>
    <div className="dd-header" onClick={() => this.toggleList()}>
        <div className="dd-header-title">{headerTitle}</div>
        {listOpen
          ? <FontAwesome name="angle-up" size="2x"/>
          : <FontAwesome name="angle-down" size="2x"/>
        }
    </div>
     {listOpen && <ul className="dd-list">
       { list ? list.map((item) => (
         <li className="dd-list-item" >{item.difficulty}</li>
       )) : "loading"}
      </ul>}
    </div>
  )
}



}

export default HikingFilter
