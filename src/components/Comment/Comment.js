import React from 'react'
import './Comment.css'
import { timeAgo } from '../../utils/utils';


function Comment(props) {
  const { author, body, created_utc } = props;
  const commentAge = timeAgo(created_utc * 1000);

  return (
    <div className='comment'>
      <div className='comment-header'>
        <h4 className='comment-author'>{author}</h4>
        <div className='comment-age'>
          {commentAge}
        </div>

      </div>
      <div className='comment-body'>
        {body}
      </div>
    </div>
  )
}

export default Comment