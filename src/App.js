import './components/notes.css';
import NoteList from './components/NoteList';
import { useEffect, useState } from 'react';
import {nanoid} from 'nanoid';
import Search from './components/Search';
import Header from './components/Header';

function App() {
  const [notes,setNotes]=useState([
    {
    id: nanoid(),
    text:"This is my first note",
    date:"01/01/2023",
    },
    {
      id: nanoid(),
      text:"This is my second note",
      date:"01/02/2023",
      },
      {
        id: nanoid(),
        text:"This is my third note",
        date:"01/03/2023",
      },
      {
        id: nanoid(),
        text:"This is my fourth note",
        date:"18/03/2023",
      }
]);

function addNote(text){
    const date=new Date();
    const newNote ={
      id:nanoid(),
      text : text,
      date: date.toLocaleDateString()
    }
    const newNotes=[...notes,newNote];
    setNotes(newNotes);
}
const [searchText,setSearchText]=useState('')
const [darkMode,setDarkMode]= useState(false)
useEffect(()=>{
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
    if (savedNotes){
      setNotes(savedNotes)
    }
},[])
useEffect(()=>{
    localStorage.setItem('react-notes-app-data',JSON.stringify(notes));

},[notes])

function addDeleteNote(id){
    const newNotes = notes.filter((note)=>note.id !=id);
    setNotes(newNotes);
}

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
        <div className="container">
      <Header handleToggleDarkMode={setDarkMode}/>
      <Search handleSearchText={setSearchText}/>
      <NoteList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={addDeleteNote}/>
    </div>
    </div>
    
  );
}

export default App;
