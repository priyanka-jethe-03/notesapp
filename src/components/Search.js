import React from 'react'
import { MdSearch } from 'react-icons/md'
import './notes.css'

function Search(props) {
  return (
    <div className='search'>
        <MdSearch className='search-icons' size='1.3em'/>
        <input type='text' placeholder='type to search' onChange={(event)=>props.handleSearchText(event.target.value)}/>
    </div>
  )
}

export default Search