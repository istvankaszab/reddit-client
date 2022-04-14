import React from 'react'
import './FilterHeader.css'
import SearchBar from '../SearchBar/SearchBar'
import SubredditsList from '../SubredditsList/SubredditsList';
import { toggleFilterHeader } from '../../features/redditSlice';
import { useDispatch } from 'react-redux';



function FilterHeader() {
  const dispatch = useDispatch();

  const onClickClose = (e) => {
    e.preventDefault();
    dispatch(toggleFilterHeader());
  }

  return (
    <div className='filter-header'>
      <SearchBar />
      <SubredditsList />
      <div className='close-modal' onClick={onClickClose}>&times;</div>
    </div>
  )
}

export default FilterHeader