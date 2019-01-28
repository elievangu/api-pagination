//npm import
import { connect } from 'react-redux';

//local import
import People from '../Components/People';
import { requestPosts } from '../Actions/index';


const mapDispatchToProps = (dispatch) => {
  return {
    peopleSelect: (category) => dispatch(requestPosts('people'))
  }
}

const AppPeople = connect(
  null,
  mapDispatchToProps
)(People);

export default AppPeople;