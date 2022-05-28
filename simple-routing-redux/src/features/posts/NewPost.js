import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns'
import { useDispatch } from 'react-redux'
import { addNewPost } from './postsSlice';

const NewPost = () => {
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCreate = (e) => {
    e.preventDefault();
    if (!postTitle || !postBody) {
      return;
    }

    try {
      dispatch(addNewPost({
        title: postTitle,
        body: postBody,
        date: format(new Date(), 'MMMM dd, yyyy pp')
      })).unwrap();

      setPostTitle('');
      setPostBody('');
      navigate('/');
    } catch (err) {
      console.error("failed", err);
    }
  }

  return (
    <main className='NewPost'>
      <h2>New post</h2>
      <form className='newPostForm' onSubmit={handleCreate}>
        <label htmlFor='postTitle'>Title:</label>
        <input
          id='postTitle'
          type='text'
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor='postBody'>Post:</label>
        <textarea
          id='postBody'
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button
          type='submit'>Submit</button>
      </form>
    </main>
  )
}

export default NewPost