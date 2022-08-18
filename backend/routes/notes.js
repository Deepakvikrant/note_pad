const express = require('express');
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser');
const router = express.Router();
const Note = require('../models/Note');


//routes 1: get all the notes of the user Using:GET "/api/auth/notes/fetchallnotes" #login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes)
    } catch (error) {
        //if there are error return bad request and the error
        console.error(error.message);
        res.status(500).send("Internal server Error occured")

    }

})

//routes 2: Add new notes of the user Using: POST"/api/notes/addnote" #login required
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'description can not be blank').isLength({ min: 5 }),

], async (req, res) => {

    try {

        const { title, description, tag } = req.body;
        // If there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        })

        const savedNote = await note.save()
        res.json(savedNote)

    } catch (error) {
        //if there are error return bad request and the error
        console.error(error.message);
        res.status(500).send("Internal server Error occured")

    }

})

//routes 3: edit/update existing notes of the user Using:PUT "/api/notes/updatenotes" #login required
router.put('/updatenote/:id', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'description can not be blank').isLength({ min: 5 }),
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        // If there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        //create newNote object
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        //find note to be updated and update it

        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note })
    } catch (error) {
        //if there are error return bad request and the error
        console.error(error.message);
        res.status(500).send("Internal server Error occured")

    }


})

//routes 4: delete existing notes of the user Using:DELETE "/api/notes/deletenotes" #login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    
    try {
        //find note to be deleted
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        //allow deletation if only user own this
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }
        note = await Note.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been Deleted", note: note })
    } catch (error) {
        //if there are error return bad request and the error
        console.error(error.message);
        res.status(500).send("Internal server Error occured")
    }
})

module.exports = router