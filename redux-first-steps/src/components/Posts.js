import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import PropTypes from "prop-types";

class Posts extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div>
        {console.log(posts)}

        <h1>Posts</h1>
        {posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchPosts();
  }
}

Posts.PropTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

const mapStatetoProps = state => ({
  posts: state.posts.items
});

export default connect(
  mapStatetoProps,
  { fetchPosts }
)(Posts);
