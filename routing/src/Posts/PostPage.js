import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import DataContext from '../context/DataContext'

const PostPage = () => {
  const { posts, setPosts, navigate, api } = useContext(DataContext);
  // Same var name is in the <Route path= /:id />
  const { id } = useParams();
  const post = posts.find(post => (post.id).toString() === id);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postsList = posts.filter(post => post.id !== id);
      setPosts(postsList);
      navigate('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }
  return (
    <main className='PostPage'>
      <article className='post'>
        {post &&
          <>
            <h2>{post.title}</h2>
            <p className='postDate'>{post.date}</p>
            <p className='postDate'>{post.body}</p>
            <Link to={`/editPost/${post.id}`}>
              <button className='editButton'>
                Edit Post
              </button>
            </Link>
            <button className='deleteButton' onClick={() => handleDelete(post.id)}>
              Delete Post
            </button>
          </>
        }
        {!post &&
          <>
            <h2>Post not found</h2>
            <p>Something went wrong and we couldn't find this post.</p>
            <p>
              <Link to='/' style={{ textDecoration: 'none'}}>
                Go to Home page
              </Link>
            </p>
          </>}
      </article>
    </main>
  )
}

export default PostPage