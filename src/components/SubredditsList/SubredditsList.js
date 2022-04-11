import React, { useEffect } from 'react'
import './SubredditsList.css'
import { useDispatch, useSelector } from 'react-redux';
import Subreddit from '../Subreddit/Subreddit';
import { loadSubreddits, selectSubreddits } from '../../features/subredditSlice';


function SubredditsList() {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);
  const reddits = useSelector((state) => state.reddits);
  const { isLoading, error } = reddits;
    

  useEffect(() => {
    dispatch(loadSubreddits());
  }, [dispatch]);

  if(isLoading) {
    return (
      <aside>
        <ul>
          <li className='is-loading subreddit-loading'></li>
          <li className='is-loading subreddit-loading'></li>
          <li className='is-loading subreddit-loading'></li>
          <li className='is-loading subreddit-loading'></li>
          <li className='is-loading subreddit-loading'></li>
        </ul>
      </aside>
    )
  }

  return (
    <aside>
      <h3>Subreddits</h3>
      <ul>
        {subreddits.map((subreddit, index) => {
          return (
            <Subreddit
              key={index}
              name={subreddit.display_name}
              url={subreddit.url}
            />
          )
        })}
      </ul>
    </aside>
  )
}

export default SubredditsList