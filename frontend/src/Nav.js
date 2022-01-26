import React from 'react';
import { NavLink } from 'react-router-dom';
import { Jumbotron, Container } from 'reactstrap';
import './Nav.css'

//called by App.js
function Nav() {
  return (
    <Container>
      <Jumbotron >
        <h1 className="display-3">Microblog</h1>
        <p className="lead">Welcome to Microblog!</p>
        <span className="NavLinks">
          <NavLink className="NavBlog1" to="/">Blog</NavLink>
          <NavLink className="NavBlog" to="/new">Add a new post</NavLink>
        </span>
      </Jumbotron>
    </Container>
  )
}

export default Nav;