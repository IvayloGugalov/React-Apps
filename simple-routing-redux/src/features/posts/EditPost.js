import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { format } from 'date-fns'
import { useSelector, useDispatch } from 'react-redux'
import { getPostById, editPost } from './postsSlice';

const EditPost = () => {
  const { id } = useParams();
  const [editPostTitle, setEditPostTitle] = useState('');
  const [editPostBody, setEditPostBody] = useState('');
  const post = useSelector(state => getPostById(state, id));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) {
      setEditPostTitle(post.title);
      setEditPostBody(post.body);
    }
  }, [post, setEditPostTitle, setEditPostBody]);

  const handleUpdate = (id) => {
    if (!editPostTitle || !editPostBody) {
      return;
    }

    try {
      dispatch(editPost({
        id: id,
        title: editPostTitle,
        body: editPostBody,
        date: format(new Date(), 'MMMM dd, yyyy pp')
      })).unwrap();

      setEditPostTitle('');
      setEditPostBody('');
      navigate(`/post/${id}`);
    } catch (err) {
      console.error('Failed', err);
    }
  }

  return (
    <main className='NewPost'>
      {editPostTitle &&
        <>
          <h2>Update post</h2>
          <form className='newPostForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='postTitle'>Title:</label>
            <input
              id='postTitle'
              type='text'
              required
              value={editPostTitle}
              onChange={(e) => setEditPostTitle(e.target.value)}
            />
            <label htmlFor='postBody'>Post:</label>
            <textarea
              id='postBody'
              value={editPostBody}
              onChange={(e) => setEditPostBody(e.target.value)}
            />
            <button type='button' onClick={() => handleUpdate(post.id)}>Submit</button>
          </form>
        </>
      }
      {!editPostTitle &&
        <>
          <h2>Post not found</h2>
          <p>Something went wrong and we couldn't find this post.</p>
          <p>
            <Link to='/' style={{ textDecoration: 'none'}}>
              Go to Home page
            </Link>
          </p>
        </>
      }
    </main>
  )
}

export default EditPost