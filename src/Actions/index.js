//npm import
import axios from "axios";

//local import



//synchronous actions

export const selectCategory = (category) => {
  return {
    type: 'SELECT_CATEGORY',
    category
  }
}

export const receivePosts = (json) => {
  return {
    type: 'RECEIVE_POSTS',
    posts: json.data.results
  }
}

//asynchronous actions
export const requestPosts = (category) => {
  
  return (dispatch) => {
    
    dispatch(selectCategory(category))

    return axios.get(`https://swapi.co/api/${category}/.json`)
    .then(
      json => dispatch(receivePosts(json))
    )
  }
    
}