import React, { useState } from 'react'
import './Subreddit.css'
import { useDispatch, useSelector } from 'react-redux'
import { setSubredditFilter } from '../../features/redditSlice';


function Subreddit(props) {
  const { name, url } = props;
  const subredditFilter = useSelector((state) => state.reddits.subredditFilter);
  const dispatch = useDispatch();

  const onClickSubreddit = (e) => {
    e.preventDefault();
    dispatch(setSubredditFilter(url));
  }

  return (
    <li className='subreddit'
    onClick={onClickSubreddit}
    >
      {name}
    </li>
  )
}

export default Subreddit
