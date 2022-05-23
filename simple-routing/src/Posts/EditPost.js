import React, { useState, useEffect, useContext } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import DataContext from '../context/DataContext'
import { format } from 'date-fns'

const EditPost = () => {

  const { posts, setPosts, navigate, api } = useContext(DataContext);
  const { id } = useParams();
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');
  const post = posts.find(post => (post.id).toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  const handleUpdate = async (id) => {
    const dateTime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = { id, title: editTitle, date: dateTime, body: editBody };

    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(posts.map(post =>
        post.id === id
          ? { ...response.data }
          : post));
      setEditTitle('');
      setEditBody('');
      navigate('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  return (
    <main className='NewPost'>
      {editTitle &&
        <>
          <h2>Update post</h2>
          <form className='newPostForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='postTitle'>Title:</label>
            <input
              id='postTitle'
              type='text'
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor='postBody'>Post:</label>
            <textarea
              id='postBody'
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button type='submit' onClick={() => handleUpdate(post.id)}>Submit</button>
          </form>
        </>
      }
      {!editTitle &&
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