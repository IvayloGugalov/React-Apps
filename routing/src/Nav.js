import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({search, setSearch}) => {
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
            onChange={(e) => setSearch(e.target.value)} />
      </form>
      <Link className='myLink' to='/'>Home</Link>
      <Link className='myLink' to='/newPost'>Post</Link>
      <Link className='myLink' to='/about'>About</Link>
    </nav>
  )
}

export default Nav