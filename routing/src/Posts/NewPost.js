import React from 'react'

const NewPost = ({
  handleCreate, postTitle, setPostTitle, postBody, setPostBody
}) => {
  return (
    <main className='NewPost'>
      <h2>New post</h2>
      <form className='newPostForm' onSubmit={handleCreate}>
        <label htmlFor='postTitle'>Title:</label>
        <input
          id='postTitle'
          type='text'
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor='postBody'>Post:</label>
        <textarea
          id='postBody'
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </main>
  )
}

export default NewPost