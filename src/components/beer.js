import React, { Component } from 'react'

const Beer = (props) => {

  const beerName = props.data.map( b => b.name)
  const brewery = props.data.map(b => {
      if(b.status === "Brewery"){
        return b.name
      }
  })

  const beerPlace = props.data.map(b => {
      if(b.status === "Beer Bar"){
        return b.name
      }
  })




  return(

    <div align="right">

      <h1>{brewery}</h1>
    </div>

  )
}

export default Beer
