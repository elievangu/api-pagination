//npm import
import React from 'react'

//local import
import AppPeople from '../Containers/AppPeople';
import Vehicles from '../Containers/AppVehicles';

const Pagination = () => {
  return (
    <div className='row'>
      <div className='col s6'>
        <AppPeople />
        <Vehicles />
      </div>
    </div>
  )
}
export default Pagination;
