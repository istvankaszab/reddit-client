import React from 'react';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';
import SubredditFilter from '../SubredditFilter/SubredditFilter';
import { useSelector } from 'react-redux';
import { GoThreeBars } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import { toggleFilterHeader } from '../../features/redditSlice';
import FilterHeader from '../FilterHeader/FilterHeader';

function Header() {
  const reddits = useSelector((state) => state.reddits);
  const { searchTerm, subredditFilter, showFilterHeader } = reddits;
  const dispatch = useDispatch();

  const onToggleMenuButton = (e) => {
    e.preventDefault();
    dispatch(toggleFilterHeader());
  }

  return (
    <header>
      <div className='header'>
        <h1>CRC Project</h1>
        {subredditFilter && <div><SubredditFilter filter={subredditFilter}/></div>}
        {searchTerm && <div><SubredditFilter filter={`"${searchTerm}"`}/></div>}
        <div className='wide-screen'>
          <SearchBar />
        </div>
        <div className='small-screen'>
          <button className='menu-button' onClick={onToggleMenuButton}>
            <GoThreeBars />
          </button>
        </div>
      </div>
      {showFilterHeader && <FilterHeader />}
    </header>
  )
}

export default Header