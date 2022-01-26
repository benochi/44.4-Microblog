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

//handle API calls switch case
const INITIAL_STATE = { posts: {}, titles: [], error: false };

//postId, title, description, body
function rootReducer(state = INITIAL_STATE, action) {
  let postId = action.payload ? action.payload.postId : null;

  switch (action.type) {
    case LOAD_POSTS:
      return { ...state, titles: action.payload };

    case LOAD_POST_DETAIL:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.payload.id]: action.payload
        },
      };

    case ADD_POST:
      let { id, title, description, body } = action.payload;
      return {
        ...state,
        posts: {
          ...state.posts,
          [postId]: { id, title, description, body }
        },
        titles: [...state.titles, { id, title, description }]
      };

    case DELETE_POST:
      let postsCopy = { ...state.posts };
      delete postsCopy[postId]
      let newTitles = state.titles.filter(title => title.id !== postId);
      return { ...state, posts: postsCopy, titles: newTitles };

    case EDIT_POST:
      let postToEdit = state.posts[postId];
      let edit = {
        ...postToEdit,
        title: action.payload.title,
        description: action.payload.description,
        body: action.payload.body
      }
      let editedTitles = state.titles.map(title =>
        title.id === postId
          ? {
            ...title, title: action.payload.title,
            description: action.payload.description
          }
          : title)
      return {
        ...state,
        posts: { ...state.posts, [postId]: edit },
        titles: editedTitles
      };

    case VOTE:
      let voteChange = state.titles.map(title =>
        title.id === postId
          ? {
            ...title,
            votes: action.payload.votes
          }
          : title)
      return {
        ...state,
        posts: {
          ...state.posts,
          [postId]: {
            ...state.posts[postId],
            votes: action.payload.votes
          }
        },
        titles: voteChange
      };

    case ADD_COMMENT:
      let postToComment = state.posts[postId];
      let addComment = {
        ...postToComment,
        comments: [...postToComment.comments,
        {
          text: action.payload.text,
          id: action.payload.id
        }]
      };
      return {
        ...state,
        posts: { ...state.posts, [postId]: addComment }
      };

    case DELETE_COMMENT:
      let oldComments = state.posts[postId].comments;
      let editedComments = oldComments.filter(comment => {
        return comment.id !== action.payload.commentId
      });
      return {
        ...state, posts: {
          ...state.posts, [postId]: {
            ...state.posts[postId],
            comments: editedComments
          }
        }
      };

    case SHOW_ERROR:
      return { ...state, error: true };

    case CLEAR_ERROR:
      return { ...state, error: false }

    default:
      return state;
  }
}

export default rootReducer;