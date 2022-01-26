import React from 'react';
import './Post.css'

//handle post from PostDetail -> Post
function Post({ post, setEditing, deletePost, postId, vote }) {
  return (
    <div className="Post">
      <div className="Post-header">
        <div className="Post-intro">
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </div>
        <div className="Post-buttons">
          <p>
            <span onClick={() => deletePost(postId)}>
              <i className="far fa-trash-alt fa-lg"></i>
            </span>
            <span onClick={() => setEditing(true)}>
              <i className="far fa-edit fa-lg"></i>
            </span>
          </p>
          <p>
            <span>{post.votes} votes:
            <span >
              <i className="fas fa-thumbs-up fa-lg"
                onClick={() => vote(postId, 'up')}></i>
                &nbsp;
              <i className="fas fa-thumbs-down fa-lg"
                onClick={() => vote(postId, "down")}></i>
            </span></span>
          </p>
        </div>
      </div>
      <div className="Post-body">
        <p>{post.body}</p>
      </div>
    </div>
  )
}

export default Post;