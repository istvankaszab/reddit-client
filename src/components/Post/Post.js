import React from 'react'
import './Post.css'
import PostBody from '../PostBody/PostBody'
import PostVote from '../PostVote/PostVote'

function Post(props) {
  const { post } = props;

  return (
    <div className='post'>
      <PostVote id={post.id} score={post.score}/>
      <PostBody post={post} />
    </div>
  )
}

export default Post