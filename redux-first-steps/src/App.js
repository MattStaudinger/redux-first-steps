import React, { Component } from 'react';
import './App.css';
import Posts from './components/Posts'
import PostsForm from './components/PostsForm'
import {Provider} from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
      <PostsForm />
      <hr></hr>
        <Posts />
      </div>
    );
  }
}

export default App;
