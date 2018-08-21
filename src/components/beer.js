import React, { Component } from 'react'

const Beer = (props) => {

  const beerName = props.data.map( b => b.name)
  const brewery = props.data.map(b => b.status)

  return(

    <div align="right">

      <h1>{beerName}</h1>
    </div>

  )
}

export default Beer
