import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './Homepage';
import PostForm from './PostForm';
import PostDetail from './PostDetail';
import NotFound from './NotFound'

function Routes() {
  return (
    <Switch>
      <Route exact path='/'>
        <Homepage />
      </Route>
      <Route exact path='/new'>
        <PostForm />
      </Route>
      <Route exact path='/post/:id'>
        <PostDetail />
      </Route>
      <Route exact path='/notFound'>
        <NotFound />
      </Route>
    </Switch>
  )
}

export default Routes;