import React from 'react'
import './PostBody.css'
import example from './example.jpg'
import PostDetails from '../PostDetails/PostDetails'

function PostBody(props) {
  const { post } = props;

  return (
    <div className='post-body'>
      <h3>{post.title}</h3>
      <img className='post-image' src={post.url} alt='' />
      <PostDetails author={post.author} created_utc={post.created_utc} num_comments={post.num_comments} />
    </div>
  )
}

export default PostBody