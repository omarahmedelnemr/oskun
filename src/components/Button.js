import React from 'react';
import './styles/Button.css'

function Button({id ,text,onclick}) {
  return (
        <div className='normal_button'>
            <button id ={id} onClick={onclick}>{text}</button>
        </div>
  )
}

export default Button