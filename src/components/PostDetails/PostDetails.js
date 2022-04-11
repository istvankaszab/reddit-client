import React from 'react'
import './PostDetails.css'
import { GoComment } from 'react-icons/go'
import { timeAgo, numberToText } from '../../utils/utils';
import { useDispatch } from 'react-redux';
import { getComments } from '../../features/redditSlice';


function PostDetails(props) {
  const { author, created_utc, num_comments, index, permalink, showComments } = props;
  const dispatch = useDispatch();

  const postAge = timeAgo(created_utc * 1000);

  const onClickComments = () => {
    dispatch(getComments(index, permalink));
  };



  return (
    <div className='post-details'>
      <div className='post-user'>
        {author}
      </div>
      <div className='post-age'>
        {postAge}
      </div>
      <div className='post-comments'>
        <button
          type='button'
          className={`comment-button ${showComments ?'comment-button-active' : ''
          }`} 
          onClick={onClickComments}
        >
          <GoComment />
        </button>
        {numberToText(num_comments)}
      </div>
    </div>
  )
}

export default PostDetails