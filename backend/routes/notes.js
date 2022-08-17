const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const router = express.Router();
const notes = require('../models/notes');

//routes 1: get all the notes of the user #login required
router.get('/fetchallnotes',fetchuser, (req, res)=>{
    
    res.json([])
} )

module.exports = router