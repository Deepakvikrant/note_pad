import React, { useContext,useState } from 'react';
import NoteContext from '../context/note/noteContext';


const AddNote = () => {

    const context = useContext(NoteContext)
    const {addNote} = context;

    const [note,setNote] = useState({title:"",description :"",tag:"default"})

    const handleClick = (e)=>{
        e.preventDefault();
    addNote(note.title,note.description,note.tag);
    }

    const onChange=(e)=>{
        setNote({...note, [e.target.name]: e.target.value})
        
    }
    return (

        <div className='container my-3'>
            <h2>Add Your Notes</h2>
            <form className='my-3'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" onChange={onChange} className="form-control" id="title" name="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" onChange={onChange} className="form-control" id="description" name='description' />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" onChange={onChange} className="form-control" id="tag" name='tag' />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Notes</button>
            </form>


        </div>


    )
}

export default AddNote