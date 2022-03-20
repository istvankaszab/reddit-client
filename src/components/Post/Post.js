import React from 'react'
import './Post.css'
import PostBody from '../PostBody/PostBody'
import PostVote from '../PostVote/PostVote'

function Post() {
  return (
    <div className='post'>
      <PostVote />
      <PostBody />
    </div>
  )
}

export default Post