import React, { useContext, useState } from 'react';
import NoteContext from '../context/note/noteContext';


const AddNote = (props) => {

    const context = useContext(NoteContext)
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
        props.showAlert("Note added Successfully", "success")
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })

    }
    return (

        <div className='container my-3'>
            <h2>Add Your Notes</h2>
            <form className='my-3'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input minLength={5} type="text" onChange={onChange} value={note.title} className="form-control" id="title" name="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input minLength={5} required type="text" onChange={onChange} value={note.description} className="form-control" id="description" name='description' />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" onChange={onChange} value={note.tag} className="form-control" id="tag" name='tag' />
                </div>
                <button type="submit" disabled={note.title.length < 5 || note.description.length < 5} className="btn btn-primary" onClick={handleClick}>Add Notes</button>
            </form>


        </div>


    )
}

export default AddNote