import React from 'react'
import { useContext } from 'react';
import NoteContext from '../context/note/noteContext';

const NoteItem = (props) => {

    const context = useContext(NoteContext)
    const {deleteNote} = context;

    const { note,updateNote } = props

    return (

        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    
                    <div className="d-flex align-item-center">
                    <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id)}}></i>
                    <i className="fa-solid fa-file-pen mx-2" onClick={()=>{updateNote(note)}}></i>
                    </div>
                 
                    <p className="card-text">{note._id}</p>
                    <p className='card-text'>{note.tag}</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default NoteItem