import React from 'react'
import './notes.css'

function Header(props) {
  return (
    <div className='header'>
        <h1>Notes</h1>
        <button onClick={()=>props.handleToggleDarkMode((previousDarkMode)=>!previousDarkMode)}>Toggle Mode</button>
    </div>
  )
}

export default Header