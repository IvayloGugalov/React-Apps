import Post from './Post'
import { Link } from 'react-router-dom'

const Feed = ({ posts }) => {
  return (
    <>
      {posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </>
  )
}

export default Feed