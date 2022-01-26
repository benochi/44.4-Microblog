import axios from 'axios';
import {
  LOAD_POSTS,
  LOAD_POST_DETAIL,
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  SHOW_ERROR,
  CLEAR_ERROR,
  VOTE
} from './actionTypes';

//handle API routes
const API_URL = "http://localhost:5000/api/posts";

//API call -> func(obj) to handle response Object. {type:<type> , payload:<payload> } payload can be {}
export function loadPostsFromAPI() {
  return async function (dispatch) {
    let res = await axios.get(API_URL);
    dispatch(getPosts(res.data));
  }
}

function getPosts(posts) {
  return { type: LOAD_POSTS, payload: posts };
}

export function loadPostDetailFromAPI(postId) {
  return async function (dispatch) {
    try {
      let res = await axios.get(`${API_URL}/${postId}`);
      dispatch(gotPostDetail(res.data));
    } catch (err) {
      dispatch(showError(err));
    }
  }
}

function gotPostDetail(post) {
  return { type: LOAD_POST_DETAIL, payload: post };
}

export function addPostToBackEnd(newPost) {
  return async function (dispatch) {
    let res = await axios.post(`${API_URL}`, newPost);
    dispatch(addPost(res.data));
  }
}

function addPost(newPost) {
  return {
    type: ADD_POST,
    payload: newPost
  }
}

export function deletePostToBackEnd(postId) {
  return async function (dispatch) {
    await axios.delete(`${API_URL}/${postId}`);
    dispatch(deletePost(postId));
  }
}

function deletePost(postId) {
  return {
    type: DELETE_POST,
    payload: { postId: postId }
  }
}

export function editPostToBackEnd(postId, formData) {
  return async function (dispatch) {
    await axios.put(`${API_URL}/${postId}`, formData);
    dispatch(editPost(postId, formData));
  }
}

function editPost(postId, formData) {
  return {
    type: EDIT_POST,
    payload: { ...formData, postId: postId }
  }
}

export function addCommentToPost(postId, newComment) {
  return async function (dispatch) {
    let res = await axios.post(`${API_URL}/${postId}/comments`, newComment);
    dispatch(addComment(postId, res.data));
  }
}

function addComment(postId, newComment) {
  return {
    type: ADD_COMMENT,
    payload: { ...newComment, postId }
  }
}

export function deleteCommentToBackEnd(postId, commentId) {
  return async function (dispatch) {
    await axios.delete(`${API_URL}/${postId}/comments/${commentId}`);
    dispatch(deleteComment(postId, commentId));
  }
}

function deleteComment(postId, commentId) {
  return {
    type: DELETE_COMMENT,
    payload: { postId, commentId }
  }
}

export function vote(postId, direction) {
  return async function (dispatch) {
    let res = await axios.post(`${API_URL}/${postId}/vote/${direction}`);
    dispatch(submitVote(postId, res.data.votes));
  }
}

function submitVote(postId, votes) {
  return {
    type: VOTE,
    payload: { postId, votes }
  }
}

function showError(err) {
  return { type: SHOW_ERROR, payload: err }
}

export function clearError() {
  return { type: CLEAR_ERROR };
}