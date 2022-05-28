import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getPostById, deletePost } from './postsSlice';

const PostPage = () => {
  // Same var name is in the <Route path= /:id />
  const { id } = useParams();
  const post = useSelector(state => getPostById(state, id));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    try {
      dispatch(deletePost({ id: id })).unwrap();
      navigate('/');
    } catch (err) {
      console.error('Failed', err);
    }
  };

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