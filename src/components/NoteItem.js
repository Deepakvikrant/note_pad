import React from 'react'

const NoteItem = (props) => {

    const { note } = props

    return (

        <div class="col-md-3">
            <div class="card my-3">
                <div class="card-body">
                    <h5 class="card-title">{note.title}</h5>
                    <p class="card-text">{note.description} <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore mollitia quis dicta deleniti qui itaque laudantium numquam, voluptas quidem, quia magni ipsam facilis fugit! Eaque quibusdam quos nisi non unde.</p>
                    <p class="card-text">{note._id}</p>
                    <a href="/" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default NoteItem