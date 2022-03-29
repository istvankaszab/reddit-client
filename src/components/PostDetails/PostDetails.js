import React from 'react'
import './PostDetails.css'
import { GrChat } from 'react-icons/gr'

function PostDetails(props) {
  const { author } = props;
  
  return (
    <div className='post-details'>
      <div className='post-user'>
        {author}
      </div>
      <div className='post-age'>
        7 hours ago
      </div>
      <div className='post-comments'>
        <button type='button' className='comment-button'>
          <GrChat />
        </button>
        123
      </div>
    </div>
  )
}

export default PostDetails