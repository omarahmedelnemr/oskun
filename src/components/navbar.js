import React from 'react';
import './styles/navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SearchBar from './searchBar';
function Navbar() {
  return (
        <div className='Navbar'>
            <h1><a href='/home'><span>O</span>SKUN</a></h1>
            <SearchBar></SearchBar>
            <div className='navLeft'>
                {/* <a href='/login'>login</a> */}
                {/* <a href='/signup'>Signup</a> */}
                {/* <Button text={"Login"}></Button> */}
                {/* <Button text={"SignUp"}></Button> */}
                <a href='/addprop'>Add Property</a>
                <a href='/profile'>Account</a>
                <button><FontAwesomeIcon icon="fa-solid fa-sort-down" /></button>
                <div className='dropDown'>
                    <a href='/home'>Home</a>
                    <a href='/history'>History</a>
                    <a href='/Favorite'>Favorite</a>
                    <a href ="/logout">logout</a>
                </div>
            </div>
        </div>
  )
}

export default Navbar