import React from 'react'
import './PostBody.css'
import PostDetails from '../PostDetails/PostDetails'

function PostBody(props) {
  const { post, isLoading } = props;

  if(isLoading) {
    return (
      <div className='post-body'>
        <div className='is-loading post-title-loading'></div>
        <div className='is-loading post-body-loading'></div>
      </div>
    )
  }

  return (
    <div className='post-body'>
      <h3>{post.title}</h3>
      <img className='post-image' src={post.url} alt='' />
      <PostDetails author={post.author} created_utc={post.created_utc} num_comments={post.num_comments} />
    </div>
  )
}

export default PostBody