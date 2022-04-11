import React, { useState, useEffect } from 'react'
import './SearchBar.css'
import { GoSearch } from 'react-icons/go'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchTerm } from '../../features/redditSlice';

function SearchBar() {
  const [searchBarValue, setSearchBarValue] = useState('');
  const searchTerm = useSelector((state) => state.reddits.searchTerm);
  const dispatch = useDispatch();
  
  const onSearchBarChange = (e) => {
    setSearchBarValue(e.target.value);
  }

  useEffect(() => {
    setSearchBarValue(searchTerm);
  }, [searchTerm]);

  const onSearcSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(searchBarValue));
  }

  return (
    <form className='searchbar' onSubmit={onSearcSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={searchBarValue}
        onChange={onSearchBarChange}
      />
      <button type="submit" className="search">
        <GoSearch />
      </button>
      
    </form>
  )
}

export default SearchBar