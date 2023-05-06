import React from 'react';
import './styles/Button.css'

function Button({text}) {
  return (
        <div className='normal_button'>
            <button>{text}</button>
        </div>
  )
}

export default Button