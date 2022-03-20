import React from 'react'
import './SearchBar.css'
import { GoSearch } from 'react-icons/go'

function SearchBar() {
  return (
    <div className='searchbar'>
      <input type="text" placeholder='Search' />
      <div className="search">
        <GoSearch />
      </div>
      
    </div>
  )
}

export default SearchBar