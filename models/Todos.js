const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User3'
    },
    title: {
        type: String,
        requred: true
    },
   
    date: {
        type: String,
    
    }
    
})
module.exports = new mongoose.model('Todo', TodoSchema);