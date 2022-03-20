import React from 'react'
import './PostBody.css'
import example from './example.jpg'
import PostDetails from '../PostDetails/PostDetails'

function PostBody() {
  return (
    <div className='post-body'>
      <h3>Some reddit title</h3>
      <img className='post-image' src={example} alt='Example' />
      <PostDetails />
    </div>
  )
}

export default PostBody