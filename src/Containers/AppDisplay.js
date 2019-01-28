//npm import
import React from 'react';
import { connect } from 'react-redux';

//local import
import Display from '../Components/Display';

const mapStateToProps = (state) => {
  return {
    posts: state.posts.map(
      post => (
        <ul>
          <li key={post.name}>{post.name}</li>
        </ul>
      )
    )
  }
}

const AppDisplay = connect(
  mapStateToProps,
  null
)(Display);

export default AppDisplay;