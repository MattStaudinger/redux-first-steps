import React, { Component } from 'react'
import Axios from 'axios';

class PostsForm extends Component {
  constructor(props){
    super(props);
    this.state ={
      title: "",
      body: ""
    }
  }

  handleChange(e){
    this.setState({
      [e.target.name] :e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();

    let data = {
      title: this.state.title,
      body: this.state.body,
    }
    Axios.post("https://jsonplaceholder.typicode.com/posts", data )
    .then(res => console.log(res.data))
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
          <label>Title: </label><br />
          <input type="text" name="title" onChange={(e)=> this.handleChange(e)}   value={this.state.title}/>
          </div>
          <div>
            <br />
          <label>Body: </label><br />
          <textarea name="body" onChange={(e)=> this.handleChange(e)} value={this.state.body} />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default PostsForm
