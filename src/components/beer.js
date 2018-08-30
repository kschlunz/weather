import React, { Component } from 'react'

const Beer = (props) => {

  const beerName = props.data.map( b => b.name)
  const brewery = props.data.map(b => {
      if(b.status === "Brewery"){
        return (
        <div className="card" style={{width: 30 + 'rem' }}>
          <div className="card-body">
            <h1 className="card-title">{b.name}</h1>
              <h6 className="card-subtitle mb-2 text-muted">{b.street}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{b.city} {b.state} {b.zip} </h6>
                <h6 className="card-subtitle mb-2 text-muted">{b.phone} </h6>
                  <a href={'https://www.'+b.url} target="_blank" rel="noopener noreferrer" className="card-link">Brewery Info</a>
                </div>
              </div>
        )
      }
  })

  const beerPlace = props.data.map(b => {
      if(b.status === "Beer Bar"){
        return b.name
      }
  })




  return(
    <div className = "row">

      {brewery}
    </div>

  )
}

export default Beer
