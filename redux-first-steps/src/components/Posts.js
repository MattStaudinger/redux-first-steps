import React, { Component } from 'react'
import axios from 'axios';

class Posts extends Component {
  constructor(props){
    super(props);
    this.state ={
      posts:[]
    }
  }
  render() {
    const {posts} = this.state
    return (
      <div>
        <h1>Posts</h1>
        {posts.map(post => (
          <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          </div>
        ))}
      </div>
    )
  }

  componentDidMount(){
    console.log("Test")
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
      console.log(res.data)
      this.setState({
        posts: res.data
      })
    
    })

    }
}

export default Posts;
