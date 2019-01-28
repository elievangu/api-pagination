//npm import
import React from 'react'

//local import

const Vehicles = ({ vehiclesSelect }) => {
  return (
      <button 
        className="waves-effect waves-light btn" 
        onClick={vehiclesSelect}>
        <i className="material-icons left">flight</i>
      </button>
  )
}

export default Vehicles;