import {FETCH_POSTS, NEW_POSTS} from '../actions/types';

const initalState = {
  items: [],
  item: {}
}

export default function(state = initalState, action) {

  switch (action.type) {
    case FETCH_POSTS:
    console.log("REDUCING")
      return {
        ...state,
        items: action.payload
      }

   default: 
   return state
  }

}