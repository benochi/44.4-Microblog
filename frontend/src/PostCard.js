import React from 'react';
import { Card, CardText, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './PostCard.css';

//handle individual post cards.  id, title, desc, body, votes. 
function PostCard({ post, vote }) {
  return (
    <Col xs="12" sm="6">
      <Card className="PostCard">
        <Link className="PostCard-Link" to={`/post/${post.id}`}>{post.title}</Link>
        <CardText className="PostCard-Description">{post.description}</CardText>
        <span className="Voting-area">
          {post.votes} votes {' '}
          <i onClick={() => vote(post.id, 'up')} className="fas fa-thumbs-up"></i>
          {"  "}
          <i onClick={() => vote(post.id, "down")} className="fas fa-thumbs-down"></i>
        </span>
      </Card>
    </Col>
  )
}

export default PostCard;