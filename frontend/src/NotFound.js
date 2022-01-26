import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {clearError} from './actions';

//Routes -> NotFound
function NotFound() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearError())
  });

  return (
    <div className="NotFound">
      Content not found.
    </div>
  )
}

export default NotFound;
