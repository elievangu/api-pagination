//npm import


//local import

let initialeState = {
  category: 'planets',
  posts: []
}

const rootReducer = (state = initialeState, action) => {
  switch(action.type) {
    case 'SELECT_CATEGORY':
      return Object.assign({}, state, {category:action.category})
    
    case 'RECEIVE_POSTS':
      return Object.assign({}, state, {posts:action.posts})

    default:
      return state
  }
} 

export default rootReducer;