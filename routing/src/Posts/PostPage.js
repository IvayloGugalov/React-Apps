import React from 'react'
import { useParams, Link } from 'react-router-dom'

const PostPage = ({ posts, handleDelete }) => {
  // Same var name is in the <Route path= /:id />
  const { id } = useParams();
  const post = posts.find(post => (post.id).toString() === id);

  return (
    <main className='PostPage'>
      <article className='post'>
        {post &&
          <>
            <h2>{post.title}</h2>
            <p className='postDate'>{post.date}</p>
            <p className='postDate'>{post.body}</p>
            <button onClick={() => handleDelete(post.id)}>
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