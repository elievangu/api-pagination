//npm import
import { connect } from 'react-redux';

//local import
import Vehicles from '../Components/Vehicles'
import { requestPosts } from '../Actions/index';


const mapDispatchToProps = (dispatch) => {
  return {
    vehiclesSelect:(category) => dispatch(requestPosts('vehicles'))
  }
}

const AppVehicles = connect(
  null,
  mapDispatchToProps
)(Vehicles);

export default AppVehicles;