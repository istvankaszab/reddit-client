import React from 'react'
import './Post.css'
import PostBody from '../PostBody/PostBody'
import PostVote from '../PostVote/PostVote'

function Post(props) {
  const { post, isLoading, index, onClickComments } = props;

  if(isLoading) {
    return (
      <div className='post'>
      <PostVote isLoading={isLoading} />
      <PostBody isLoading={isLoading} />
    </div>     
    )
  }

  return (
    <div className='post'>
      <PostVote id={post.id} score={post.score}/>
      <PostBody post={post} index={index} />
    </div>
  )
}

export default Post