import React, { useEffect } from 'react'
import './SubredditsList.css'
import { useDispatch, useSelector } from 'react-redux';
import Subreddit from '../Subreddit/Subreddit';
import { loadSubreddits, selectSubreddits } from '../../features/subredditSlice';


function SubredditsList() {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);

    

  useEffect(() => {
    dispatch(loadSubreddits());
  }, [dispatch]);

  return (
    <aside>
      <h3>Subreddits</h3>
      <ul>
        {subreddits.map((subreddit) => {
          return (
            <Subreddit
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