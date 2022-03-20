import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import './Header.css'

function Header() {
  return (
    <header className='header'>
      <ul>
        <li>
          <strong>CRC Project</strong>
        </li>
        <li>
          <SearchBar />
        </li>
      </ul>
    </header>
  )
}

export default Header