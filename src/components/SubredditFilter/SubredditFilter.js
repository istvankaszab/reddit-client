import React from 'react';
import './SubredditFilter.css';
import { useDispatch } from 'react-redux'
import { setSubredditFilter } from '../../features/redditSlice';


function SubredditFilter(props) {
  const { url } = props;
  const dispatch = useDispatch();


  const onClickCancel = (e) => {
    e.preventDefault();
    dispatch(setSubredditFilter(''));
  }

  return (
    <div className='subreddit-filter'>
      {url}
      <div
        className='subreddit-filter-cancel'
        onClick={onClickCancel}
      >
        X
      </div>
    </div>
  )
}

export default SubredditFilter