import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <main>
      <h2>Page not found</h2>
      <p>
        <Link to='/'>Go Home</Link>
      </p>
    </main>
  )
}

export default PageNotFound