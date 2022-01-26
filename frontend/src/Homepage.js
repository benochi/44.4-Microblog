import React from 'react';
import PostList from './PostList';
import './Homepage.css'
import { Container } from 'reactstrap';

//Routes -> Homepage -> PostList
function Homepage() {
  return (
    <Container className="Homepage">
      <h2 className="Homepage-header">Microblog.</h2>
      <PostList />
    </Container>
  )
}

export default Homepage;