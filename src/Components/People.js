//npm import
import React from 'react';

//local iimport

const People = ({ peopleSelect }) => {
  return (
    
      <button 
        className="waves-effect waves-light btn" 
        onClick={peopleSelect}>
          <i className="material-icons left">face</i>
      </button>
    

  )
}

export default People;