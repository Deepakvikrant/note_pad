import React, { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {

  const initialNotes = [
    {
      "_id": "63005a1071616f55e0a6f2f0",
      "user": "62fbda552b615561226269af",
      "title": "my title",
      "description": "description please access yourtube",
      "tag": "personal",
      "date": "2022-08-20T03:50:40.112Z",
      "__v": 0
    },
    {
      "_id": "63005a3071616f55e0a6f2f3",
      "user": "62fbda552b615561226269af",
      "title": "my title 1",
      "description": "description 1 ",
      "tag": "personal",
      "date": "2022-08-20T03:51:12.562Z",
      "__v": 0
    },
    {
      "_id": "63005a3871616f55e0a6f2f5",
      "user": "62fbda552b615561226269af",
      "title": "my title 2",
      "description": "description 2 ",
      "tag": "personal",
      "date": "2022-08-20T03:51:20.248Z",
      "__v": 0
    },
    {
      "_id": "63005a4071616f55e0a6f2f7",
      "user": "62fbda552b615561226269af",
      "title": "my title 3",
      "description": "description 3 ",
      "tag": "personal",
      "date": "2022-08-20T03:51:28.164Z",
      "__v": 0
    },
    {
      "_id": "63005a4d71616f55e0a6f2f9",
      "user": "62fbda552b615561226269af",
      "title": "my title 4",
      "description": "description 4",
      "tag": "personal",
      "date": "2022-08-20T03:51:41.310Z",
      "__v": 0
    }
  ]

  const [notes, setNotes] = useState(initialNotes);


  // Add Notes

  const addNote=(title,description,tag)=>{
    //TO DO API CALL
    console.log("Adding a new note");
    const note = {
      "_id": "6n3005a4d71616f55e0a6f2f9",
      "user": "62fbda552b615561226269af",
      "title":title,
      "description": description,
      "tag": tag,
      "date": "2022-08-20T03:51:41.310Z",
      "__v": 0
    };
    setNotes(notes.concat(note))

  }

  // Delete a Notes
  const deleteNote=(id)=>{
    console.log("Deletind a note with id"+ id);
    const newNotes = notes.filter((note)=>{return note._id !== id})
    setNotes(newNotes)

  }

  // Edit a Notes

  const editNote=(id)=>{

  }


  return (
    <NoteContext.Provider value={{ notes, setNotes,addNote,deleteNote,editNote,}}>

      {props.children}

    </NoteContext.Provider>
  )

}

export default NoteState;