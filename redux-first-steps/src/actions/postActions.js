import {FETCH_POSTS, NEW_POSTS} from './types';
import axios from 'axios';

export const fetchPosts = () => dispatch => {
  console.log("TEST");
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(posts => dispatch({
      type:FETCH_POSTS,
      payload: posts.data
    })
      
      )
}