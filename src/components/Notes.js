import React from 'react'
import {MdDeleteForever} from 'react-icons/md'
import './notes.css'

function Notes(props) {
  return (
    <div className='note'>
        <span>{props.text}</span>
        <div className='note-footer'>
            <small>{props.date}</small>
            <MdDeleteForever className='delete-icon' size='1.3em' onClick={function(id){
                props.handleDeleteNote(props.id)
            }}/>
        </div>
    </div>
  )
}

export default Notes