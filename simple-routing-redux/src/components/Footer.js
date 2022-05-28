import React from 'react'
import { useSelector } from 'react-redux';
import { getPostCount } from '../features/posts/postsSlice';

const Footer = () => {
  const postCount = useSelector(state => getPostCount(state));

  return (
    <footer className='Footer'>
      <p>We have {postCount} {postCount === 1 ? 'post' : 'posts'} :O</p>
    </footer>
  )
}

export default Footer