import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

const HikingFilter = (props) => {
  console.log("i am props in HikingFilter", props)
  return(
    <div>
      <select>

      </select>
    </div>
  );



  HikingFilter.propTypes = {
    title: React.PropTypes.string.isRequired,
    options: React.PropTypes.array.isRequired,
    selectedOption: React.PropTypes.string,
    controlFunc: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string
  };


}

export default HikingFilter
