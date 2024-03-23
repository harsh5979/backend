const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User3'
    },
    title: {
        type: String,
        requred: true
    },
    description: {
        type: String,
        requred: true
    },
    tag: {
        type: String
    }

})
module.exports = new mongoose.model('Note2', NoteSchema);