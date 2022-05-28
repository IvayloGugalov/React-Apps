import React from 'react'
import { useSelector } from 'react-redux'
import Feed from '../features/posts/Feed'
import { searchPostsResult, getIsPostsLoading, getPostsError } from '../features/posts/postsSlice';

const Home = () => {
  const posts = useSelector(searchPostsResult);
  const isLoading = useSelector(getIsPostsLoading);
  const error = useSelector(getPostsError);

  return (
    <main className='Home'>
      {isLoading && <p className='statusMsg'>Loading posts...</p>}
      {!isLoading && error && <p className='statysMsg' style={{color:'crimson'}}>{error}</p>}
      {!isLoading
      && !error
      && (posts?.length
        ?
          <Feed posts={posts} />
        :
          <p style={{ marginTop: '2rem' }}>
            No posts do display.
          </p>
        )
      }
    </main>
  )
}

export default Home;