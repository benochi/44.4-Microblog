import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';
import { useDispatch } from "react-redux";
import { addPostToBackEnd, editPostToBackEnd } from './actions';
import './PostForm.css';

const INITIAL_STATE = {
  title: "",
  description: "",
  body: "",
}

//Form for title/description/body save/delete. Handle add post and edit post. 
//add/edit from actions.js -> rootReducer
//Routes -> PostForm(for New) / PostDetail -> PostForm(for editing)

function PostForm({ post = INITIAL_STATE, editing = false, setEditing, postId}) {
  const [formData, setFormData] = useState(post);
  const dispatch = useDispatch();
  const history = useHistory();

  const add = (formData) => dispatch(addPostToBackEnd(formData));
  const edit = (postId, data) => dispatch(editPostToBackEnd(postId, data));

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({ ...formData, [name]: value }));
  }

  //handle add/edit on submit
  const handleSubmit = evt => {
    evt.preventDefault();
    if (editing) {
      edit(postId, formData);
      setFormData(INITIAL_STATE);
      setEditing(false);
    } else {
      add(formData);
      setFormData(INITIAL_STATE);
      history.push('/');
    }
  }
  //handle cancel with useHistory()
  const cancel = () => history.push('/');

  return (
    <Container className="PostForm">
      <h2>New Post</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="title">Title:</Label>
          <Input type="text"
                 id="title"
                 name="title"
                 value={formData.title}
                 onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description">Description:</Label>
          <Input type="text"
                 id="description"
                 name="description"
                 value={formData.description}
                 onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="body">Body:</Label>
          <Input type="textarea"
                 id="body"
                 name="body"
                 rows='5'
                 value={formData.body}
                 onChange={handleChange} />
        </FormGroup>
        <Button color='primary' type='submit'>Save</Button>{'   '}
        <Button color='secondary' type='button' onClick={cancel}>Cancel</Button>
      </Form>
    </Container>
  )
}

export default PostForm;