const express = require('express');
const { body,validationResult } = require('express-validator');
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

//routes 2: Add new notes of the user Using: POST"/api/auth/notes/addnote" #login required
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

module.exports = router