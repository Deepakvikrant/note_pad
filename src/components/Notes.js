import React from 'react'
import { useContext } from 'react';
import NoteContext from '../context/note/noteContext';
import NoteItem from './NoteItem';

const Notes = () => {

    const context = useContext(NoteContext)
    const {notes, setNotes} = context;

  return (
    <div className="row my-3">
    <h2>Your Notes</h2>
    {notes.map((note)=>{
       return <NoteItem note = {note}/>
       //return note.description
    })}

    </div>
  )
}

export default Notes