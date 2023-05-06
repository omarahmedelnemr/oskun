import React from 'react';
import './styles/SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function SearchBar() {
  return (
        <div className='searchBar'>
            <input placeholder='Find a House by Its Name'></input>
            <div className='seacrhButton'>
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </div>
            
        </div>
  )
}

export default SearchBar