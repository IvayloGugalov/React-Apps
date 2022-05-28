import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllPosts, searchPosts, setSearch, setSearchResults } from '../features/posts/postsSlice';

const Nav = () => {
  const posts = useSelector(selectAllPosts);
  const search = useSelector(searchPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    const filteredPosts = posts?.filter(post =>
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()));

      dispatch(setSearchResults(filteredPosts?.reverse()));
  }, [posts, search, dispatch]);
  // NOTE that we pass the dispatch as an argument here for re-rendering

  return (
    <nav className='Nav'>
      <form
        className='searchForm'
        onSubmit={(e) => e.preventDefault()}>
          <label htmlFor='search'>Search posts</label>
          <input
            id='search'
            type='text'
            placeholder='Search posts'
            value={search}
            onChange={(e) => dispatch(setSearch(e.target.value))} />
      </form>
      <Link className='myLink' to='/newPost'>Post</Link>
      <Link className='myLink' to='/about'>About</Link>
      <Link className='myLink' to='/'>Home</Link>
    </nav>
  )
}

export default Nav