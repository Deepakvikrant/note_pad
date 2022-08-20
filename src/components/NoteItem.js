import React from 'react'

const NoteItem = (props) => {

    const { note } = props

    return (

        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description} <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore mollitia quis dicta deleniti qui itaque laudantium numquam, voluptas quidem, quia magni ipsam facilis fugit! Eaque quibusdam quos nisi non unde.</p>
                    <div className="d-flex align-item-center">
                    <i className="fa-solid fa-trash mx-2"></i>
                    <i className="fa-solid fa-file-pen mx-2"></i>
                    </div>
                 
                    <p className="card-text">{note._id}</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default NoteItem