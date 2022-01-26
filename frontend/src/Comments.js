import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form, InputGroupAddon, InputGroup, Input, Button } from 'reactstrap';
import './Comments.css'

function Comments({ comments, add, remove }) {

  const { id } = useParams();
  const [formData, setFormData] = useState({ text: "" });

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({ ...formData, [name]: value }));
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    add(id, formData);
    setFormData({ text: "" });
  }

  return (
    <div className="Comments">
      <h3>Comments</h3>
      {comments.map(comment => {
        return (
          <div key={comment.id}>
            <p>
              <span>
                <i className="far fa-trash-alt"
                  onClick={() => remove(id, comment.id)}></i>
              </span> {comment.text}</p>

          </div>
        )
      })}
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Input type="text"
            id="text"
            name="text"
            value={formData.text}
            placeholder="New Comment"
            onChange={handleChange} />
          <InputGroupAddon addonType="append">
            <Button color='primary' type='submit'>Save</Button>
          </InputGroupAddon>
        </InputGroup>
      </Form>
    </div>
  )
}

export default Comments;