import React from 'react';
import './styles/navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SearchBar from './searchBar';
import { Cookies } from 'react-cookie';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

function Navbar() {
   const navigate = useNavigate();

    function logout(){
        localStorage.removeItem('jwt')
        navigate('/home');

    }
    const jwt = localStorage['jwt']
    var list =[]
    if (jwt == undefined){
        list =  <div className='navLeft'>
                        <a href='/login'>login</a>
                        <a href='/register'>Signup</a>
                    </div>
    }else{
         list = <div className='navLeft'>
        <a href='/addprop'>Add Property</a>
        <a href='/profile'>Account</a>
        <button><FontAwesomeIcon icon="fa-solid fa-sort-down" /></button>
        <div className='dropDown'>
            <a href='/home'>Home</a>
            <a href='/history'>History</a>
            <a href='/Favorite'>Favorite</a>
            <a href ="" onClick={logout}>logout</a>
        </div>
    </div>
    }
  return (
        <div className='Navbar'>
            <h1><a href='/home'><span>O</span>SKUN</a></h1>
            <SearchBar></SearchBar>
            {list}
        </div>
  )
}

export default Navbar