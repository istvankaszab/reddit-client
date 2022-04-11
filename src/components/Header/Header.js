import React from 'react';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';
import SubredditFilter from '../SubredditFilter/SubredditFilter';
import { useSelector } from 'react-redux';

function Header() {
  const reddits = useSelector((state) => state.reddits);
  const { subredditFilter } = reddits;

  return (
    <header className='header'>
      <ul>
        <li>
          <strong>CRC Project</strong>
        </li>
        {subredditFilter && <li><SubredditFilter url={subredditFilter} /></li>}
        <li>
          <SearchBar />
        </li>
      </ul>
    </header>
  )
}

export default Header