import React from 'react'
import './PostDetails.css'
import { GrChat } from 'react-icons/gr'
import { timeAgo, numberToText } from '../../utils/utils';

function PostDetails(props) {
  const { author, created_utc, num_comments } = props;
  const postAge = timeAgo(created_utc * 1000);

  return (
    <div className='post-details'>
      <div className='post-user'>
        {author}
      </div>
      <div className='post-age'>
        {postAge}
      </div>
      <div className='post-comments'>
        <button type='button' className='comment-button'>
          <GrChat />
        </button>
        {numberToText(num_comments)}
      </div>
    </div>
  )
}

export default PostDetails