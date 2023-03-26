import React, { useState } from 'react'
import './notes.css'

function AddNotes(props) {
    const [noteText,setNoteText]=useState('');
    const characterLimit=200;
    function handleChange(event){
        if (characterLimit-event.target.value.length >=0){
            setNoteText(event.target.value)
        }
       

    }

    function handleSaveClick(){
        if (noteText.trim().length>0){
            props.handleAddNote(noteText)
            setNoteText('');
        }
    }
  return (
    <div className='note new'>
        <textarea rows='8' cols='10' placeholder='Type to adda note' onChange={handleChange} value={noteText}></textarea>
        <div className='note-footer'>
            <small>{characterLimit-noteText.length} Remaining</small>
            <button className='save' onClick={handleSaveClick}>Save</button>
        </div>
    </div>
  )
}

export default AddNotes
