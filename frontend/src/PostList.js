import React, { useEffect } from 'react';
import PostCard from './PostCard';
import { useSelector, useDispatch } from "react-redux";
import { loadPostsFromAPI, vote } from './actions';
import { Container, Row } from 'reactstrap';
import './PostList.css';

function PostList() {
  const dispatch = useDispatch();
  const titles = useSelector(st => st.titles);

  useEffect(() => {
    dispatch(loadPostsFromAPI());
  }, [dispatch]);

  const submitVote = (postId, direction) => {
    dispatch(vote(postId, direction));
  }

  titles.sort((b, a) => {
    let votesA = a.votes;
    let votesB = b.votes;
    if (votesA < votesB) return -1;
    if (votesA > votesB) return 1;

    return 0;
  })

  return (
    <Container id="Row-Container">
      <Row>
        {titles.length
          ? titles.map(post => {
            return (<PostCard key={post.id} post={post} vote={submitVote} />)
          })
          : <h3>Loading Posts...</h3>
        }
      </Row>
    </Container>
  )
}

export default PostList;