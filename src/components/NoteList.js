import React from 'react'
import Notes from './Notes'
import './notes.css'
import App from '../App'
import AddNotes from './AddNotes'

function NoteList(props) {
  return (
    <div className='note-list'>
        {props.notes.map((note)=>(
            <Notes id={note.id} text={note.text} date={note.date} handleDeleteNote={props.handleDeleteNote}/>
        ))}
        <AddNotes handleAddNote={props.handleAddNote}/>
    </div>
  )
}

export default NoteList